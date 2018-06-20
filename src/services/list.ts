import { get } from "../utils/request";

export async function query(param) {
  return get("/api/list", { param });
}
