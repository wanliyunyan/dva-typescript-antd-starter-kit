import { stringify } from "qs";
import {get, post, put, remove} from "../utils/request";

export async function queryProjectNotice() {
  return get("/api/project/notice");
}

export async function queryActivities() {
  return get("/api/activities");
}

export async function queryRule(params) {
  return get(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return remove("/api/activities", {params});
}

export async function addRule(params) {
  return post("/api/activities", {params});
}

export async function fakeSubmitForm(params) {
  return post("/api/forms", {params});
}

export async function fakeChartData() {
  return get("/api/fake_chart_data");
}

export async function queryTags() {
  return get("/api/tags");
}

export async function queryBasicProfile() {
  return get("/api/profile/basic");
}

export async function queryAdvancedProfile() {
  return get("/api/profile/advanced");
}

export async function queryFakeList(params) {
  return get(`/api/fake_list?${stringify(params)}`);
}

export async function fakeAccountLogin(params) {
  return post("/api/login/account", {params,
  });
}

export async function fakeMobileLogin(params) {
  return post("/api/login/mobile", {params});
}

export async function fakeRegister(params) {
  return post("/api/register", {params});
}

export async function queryNotices() {
  return get("/api/notices");
}
