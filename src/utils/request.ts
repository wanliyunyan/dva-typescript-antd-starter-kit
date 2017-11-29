import { notification } from "antd";
import axios from "axios";

interface InterfaceCssError extends Error {
  response?: any;
}

interface IParam {
  url: string;
  option?: any;
}

export function get(url: string, options?: any) {
  return request(url, { ...options, method: "get" });
}

export function post(url, options?) {
  return request(url, { ...options, method: "post" });
}

export function put(url, options?) {
  return request(url, { ...options, method: "put" });
}

export function remove(url, options?) {
  return request(url, { ...options, method: "delete" });
}

const fetch = (url, options) => {
  const { method = "get", data } = options;
  switch (method.toLowerCase()) {
    case "get":
      return axios.get(url, { params: data });
    case "delete":
      return axios.delete(url, { data });
    case "head":
      return axios.head(url, data);
    case "post":
      return axios.post(url, JSON.stringify(data));
    case "put":
      return axios.put(url, JSON.stringify(data));
    case "patch":
      return axios.patch(url, data);
    default:
      return axios(options);
  }
};

/*function parseJSON(response) {
  return response.json();
}*/

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  notification.error({
    description: response.statusText,
    message: `请求错误 ${response.status}: ${response.url}`,
  });

  // const error = new cssError(response.statusText); //TODO 需要类型

  const error = {} as InterfaceCssError;
  error.response = response;

  throw error;
}

function handelData(res) {
  const data = res.data;
  if (data && data.msg && !data.success) {
    //message.error(data.msg)
  }
  // else if(data && data.msg && data.success) {
  //   message.success(data.msg)
  // }
  return { ...data.data, success: data.success || data.message === "Success" };
}

function handleError(error) {
  const data = error.response.data;
  if (data.errors) {
    //message.error(`${data.message}：${data.errors}`, 5)
  } else if (data.error) {
    //message.error(`${data.error}：${data.error_description}`, 5)
  } else {
    //message.error('未知错误！', 5)
  }
  return { success: false };
}

export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(handelData)
    .catch(handleError);
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
/*export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}*/
