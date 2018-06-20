import { query } from "../services/a";

export default {
  namespace: "example",

  state: {
    data: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {
    *query({ payload }, { select, call, put }) {
      const data = yield call(query, payload);
      if (data && data.success) {
        yield put({
          type: "querySuccess",
          payload: {
            list: data.data,
            pagination: data.page
          }
        });
      }
    }
  },

  reducers: {
    querySuccess(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
