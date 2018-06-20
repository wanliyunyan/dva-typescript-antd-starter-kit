import { message } from "antd";
import { routerRedux } from "dva/router";
import queryString from "query-string";
import { query } from "../services/list";

export const initEditData = () => {
  return {
    name: {
      value: null
    },
    sxm: {
      value: null
    },
    cd1: {
      value: null
    },
    mrz: {
      value: null
    },
    xybz: {
      value: false
    },
    sfbl: {
      value: false
    },
    zzjy: {
      value: null
    },
    extendInfo: ""
  };
};

export default {
  namespace: "tableList",
  state: {
    list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === "/list/table-list") {
          dispatch({
            type: "list"
          });
        }
      });
    }
  },

  effects: {
    *list({ payload }, { call, put }) {
      try {
        yield put({
          type: "listLoading",
          payload: true
        });
        const { data } = yield call(query, payload);

        if (data) {
          yield put({
            type: "listSave",
            payload: data
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
        yield put({
          type: "listLoading",
          payload: false
        });
      }
    }
  },

  reducers: {
    listSave(state, { payload }) {
      return {
        ...state,
        list: payload
      };
    }
  }
};
