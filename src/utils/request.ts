import { message, notification } from "antd";
import axios from "axios";

interface InterfaceCssError extends Error {
  response?: any;
}

// 增加拦截器
axios.interceptors.response.use(
  response => {
    // const {data} = response;
    // location.replace("#/login");
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

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
  const { method = "get", param } = options;

  switch (method.toLowerCase()) {
    case "get":
      return axios.get(url);
    case "delete":
      return axios.delete(url, param);
    case "head":
      return axios.head(url, param);
    case "post":
      return axios.post(url, param);
    case "put":
      return axios.put(url, param);
    case "patch":
      return axios.patch(url, param);
    default:
      return axios(options);
  }
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = {} as InterfaceCssError;
  error.response = response;

  throw error;
}

function handelData(res) {
  const { data } = res;
  if (data.status === "10000") {
    return { ...res.data, success: true };
  } else {
    if (data.message) {
      message.error(data.message);
    }
    return { ...res.data, success: false };
  }
}

function handleError(error) {
  const { response } = error;
  if (response) {
    const { data, config } = response;
    if (data) {
      notification.error({
        message: `${response.status}:${response.statusText}`,
        description: `url:${config.url}\n exception:${data.exception}`
      });
    } else {
      message.error("未知错误!");
    }
    return { success: false };
  }
}

export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(handelData)
    .catch(handleError);
}
