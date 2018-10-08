import { del, get, post, put } from "../utils/request";

export const create = async param => post("/api/list", { param });
export const query = async param => get("/api/list", { param });
export const update = async param => put(`/api/list/${param.id}`, { param });
export const remove = async id => del(`/api/list/${id}`);
