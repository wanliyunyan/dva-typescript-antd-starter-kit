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

export function get(url: string, options?: any, config?: any): any {
  return request(url, { ...options, method: "get" }, config);
}

export function post(url: string, options?: any, config?: any): any {
  return request(url, { ...options, method: "post" }, config);
}

export function put(url: string, options?: any, config?: any): any {
  return request(url, { ...options, method: "put" }, config);
}

export function del(url: string, options?: any, config?: any): any {
  return request(url, { ...options, method: "delete" }, config);
}

const fetch = (url: string, options: any, config: any) => {
  const { method = "get", param } = options;
  switch (method.toLowerCase()) {
    case "get":
      return axios.get(url, config);
    case "delete":
      return axios.delete(url, config);
    case "head":
      return axios.head(url, config);
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

function checkStatus(response: any): any {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = {} as InterfaceCssError;
  error.response = response;

  throw error;
}

function handelData(res: any): any {
  return { ...res, success: true };
}

function handleError(error: any): any {
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

export default function request(url: string, options: any, config: any): any {
  return fetch(url, options, config)
    .then(checkStatus)
    .then(handelData)
    .catch(handleError);
}
