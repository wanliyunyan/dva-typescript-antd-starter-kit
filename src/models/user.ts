import { routerRedux } from "dva/router";

export default {
  namespace: "user",
  state: {
    loading: false,
    loginData: {
      username: {
        value: ""
      },
      password: {
        value: ""
      }
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === "/user/login") {
          // 做你想做的事情
        }
      });
    }
  },
  effects: {
    *login({ payload }, { call, put }) {
      try {
        yield put({
          type: "querySuccess",
          payload: { loading: true }
        });
        yield put(routerRedux.push("/dashboard/analysis"));
      } finally {
        yield put({
          type: "querySuccess",
          payload: { loading: false }
        });
      }
    }
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        loginData: {
          ...state.loginData,
          ...payload
        }
      };
    },
    querySuccess(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
