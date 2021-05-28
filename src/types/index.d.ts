// 声明正常返回值类型
interface NormalReturnType {
  data?: unknown;
  code?: number;
  msg?: string;
}

// 声明基础返回值类型
interface BaseReturnType {
  success: boolean;
}

// 声明返回值类型
declare type ApiReturnType = NormalReturnType & BaseReturnType;

export interface IOption {
  method: "GET" | "DELETE" | "HEAD" | "POST" | "PUT" | "PATCH";
  param?: Record<string, unknown>;
}
