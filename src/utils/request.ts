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
    if (!status) {
      return { success: false };
    }
    return { data, success: status >= 200 && status < 300 };
  }
  return { success: false };
};

// interceptors
axios.interceptors.request.use(
  config => config,
  err => {
    message.error("request timed out");
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
          description: "your description"
        });
      } else if (process.env.NODE_ENV === "production") {
        notification.error({
          message: "system information",
          description:
            "The system is busy and cannot get the return value of the interface correctly. Please try again later!"
        });
      } else {
        notification.error({
          message: "system information",
          description: "process.env.NODE_ENV should not be empty"
        });
      }
      return Promise.resolve(err);
    }
  }
);
