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

export function get(url: string, options?: any, config?: any) {
  return request(url, { ...options, method: "get" }, config);
}

export function post(url: string, options?: any, config?: any) {
  return request(url, { ...options, method: "post" }, config);
}

export function put(url: string, options?: any, config?: any) {
  return request(url, { ...options, method: "put" }, config);
}

export function del(url: string, options?: any, config?: any) {
  return request(url, { ...options, method: "delete" }, config);
}

const fetch = (url, options, config) => {
  const { method = "get", param } = options;
  switch (method.toLowerCase()) {
    case "get":
      return axios.get(url, config);
    case "delete":
      return axios.delete(url, param);
    case "head":
      return axios.head(url, param);
    case "post":
      return axios.post(url, param, config);
    case "put":
      return axios.put(url, param, config);
    case "patch":
      return axios.patch(url, param, config);
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
  return { ...res };
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

export default function request(url, options, config) {
  return fetch(url, options, config)
    .then(checkStatus)
    .then(handelData)
    .catch(handleError);
}
