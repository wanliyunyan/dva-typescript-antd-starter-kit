import { Model } from "dva";
import { create, query, remove, update } from "../services/a";

const a: Model = {
  namespace: "a",
  state: "",
  reducers: {
    createSuccess(state: any, { payload }: any) {
      return payload;
    },
    deleteSuccess(state: any, { payload }: any) {
      return payload;
    },
    querySuccess(state: any, { payload }: any) {
      return payload;
    },
    updateSuccess(state: any, { payload }: any) {
      return payload;
    },
  },
  effects: {
    *query(action, { call, put }) {
      yield call(query);
      yield put({ type: "querySuccess", payload: "get请求已发送" });
    },
    *create(action, { call, put }) {
      yield call(create);
      yield put({ type: "createSuccess", payload: "post请求已发送" });
    },
    *delete(action, { call, put }) {
      yield call(remove);
      yield put({ type: "deleteSuccess", payload: "delete请求已发送" });
    },
    *update(action, { call, put }) {
      yield call(update);
      yield put({ type: "updateSuccess", payload: "update请求已发送" });
    },
  },
};

export default a;
