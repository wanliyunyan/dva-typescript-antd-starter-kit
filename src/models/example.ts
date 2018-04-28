import { query } from "../services/a";

export default {
  namespace: "example",

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {
    *query({}, { select, call, put }) {
      const pathQuery = yield select(
        ({ routing }) => routing.locationBeforeTransitions.query
      );
      const data = yield call(query, pathQuery);
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
