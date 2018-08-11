import { Model } from "dva";
import { create, query, remove, update } from "../services/list";

const list: Model = {
  namespace: "list",
  state: {
    list: []
  },
  reducers: {
    listSave(state: any, { payload }: any) {
      return {
        ...state,
        list: payload
      };
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === "/list/table-list") {
          dispatch({
            type: "query"
          });
        }
      });
    }
  },

  effects: {
    *create({ payload }, { call, put }) {
      try {
        const { success } = yield call(create, payload);

        if (success) {
          yield put({
            type: "query"
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
      }
    },
    *delete({ payload }, { call, put }) {
      try {
        const { success } = yield call(remove, payload);

        if (success) {
          yield put({
            type: "query"
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
      }
    },
    *update({ payload }, { call, put }) {
      try {
        const { data, success } = yield call(update, payload);

        if (success) {
          yield put({
            type: "query"
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
      }
    },
    *query({ payload }, { call, put }) {
      try {
        const { data, success } = yield call(query, payload);

        if (success) {
          yield put({
            type: "listSave",
            payload: data
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
      }
    }
  }
};

export default list;
