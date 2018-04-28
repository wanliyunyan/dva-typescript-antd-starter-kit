import { get, post, put, remove } from "../utils/request";

export async function query(param) {
  return get("/api/users", { param });
}

export async function queryCurrent(param) {
  return get("/api/currentUser", { param });
}
