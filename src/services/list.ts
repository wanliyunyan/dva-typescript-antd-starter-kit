import { del, get, post, put } from "../utils/request";

export const create = async (param: any) => post("/api/list", { param });
export const query = async () => get("/api/list");
export const load = async (id: string) => get(`/api/list/${id}`);
export const update = async (param: any) =>
  put(`/api/list/${param.id}`, { param });
export const remove = async (id: string) => del(`/api/list/${id}`);
