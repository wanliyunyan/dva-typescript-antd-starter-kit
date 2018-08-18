import { message, notification } from "antd";
import axios from "axios";

export const get = (url: string, options?: any, config?: any): any =>
  request(url, { ...options, method: "get" }, config);

export const post = (url: string, options?: any, config?: any): any =>
  request(url, { ...options, method: "post" }, config);

export const put = (url: string, options?: any, config?: any): any =>
  request(url, { ...options, method: "put" }, config);

export const del = (url: string, options?: any, config?: any): any =>
  request(url, { ...options, method: "delete" }, config);

const request = (url: string, options: any, config: any): any =>
  fetch(url, options, config).then(handleData);

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

const handleData = (result: any): any => {
  if (result) {
    const { status, data } = result;
    if (status >= 200 && status < 300) {
      return { data, success: true };
    }
    return { data, success: false };
  }
  return { success: false };
};

// 增加拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    message.error("请求超时!");
    return Promise.resolve(err);
  }
);

axios.interceptors.response.use(
  result => {
    return result;
  },
  err => {
    if (err && err.response) {
      const {
        response: { data, status, statusText }
      } = err;
      notification.error({
        message: `${status}:${statusText}`,
        description: data
      });
      return Promise.resolve(err);
    }
  }
);
