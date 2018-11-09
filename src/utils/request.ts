import { message, notification } from "antd";
import axios from "axios";

export const get = async <T = any>(
  url: string,
  options?: any,
  config?: any
): Promise<T> => request(url, { ...options, method: "get" }, config);

export const post = async <T = any>(
  url: string,
  options?: any,
  config?: any
): Promise<T> => request(url, { ...options, method: "post" }, config);

export const put = async <T = any>(
  url: string,
  options?: any,
  config?: any
): Promise<T> => request(url, { ...options, method: "put" }, config);

export const del = async <T = any>(
  url: string,
  options?: any,
  config?: any
): Promise<T> => request(url, { ...options, method: "delete" }, config);

const request = async <T = any>(
  url: string,
  options: any,
  config: any
): Promise<T> => handleData(await fetch(url, options, config));

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
    return { data, success: status >= 200 && status < 300 };
  }
  return { success: false };
};

// 增加拦截器
axios.interceptors.request.use(
  config => config,
  err => {
    message.error("请求超时!");
    return Promise.resolve(err);
  }
);

axios.interceptors.response.use(
  result => result,
  err => {
    if (err && err.response) {
      const {
        response: { data, status, statusText }
      } = err;
      if (process.env.NODE_ENV === "development") {
        notification.error({
          message: `${status}:${statusText}`,
          description: data
        });
      } else if (process.env.NODE_ENV === "production") {
        notification.error({
          message: "系统消息",
          description: "系统繁忙，无法正确获取接口的返回值，请稍后再试！"
        });
      } else {
        notification.error({
          message: "系统消息",
          description: "process.env.NODE_ENV 不应该为空"
        });
      }
      return Promise.resolve(err);
    }
  }
);
