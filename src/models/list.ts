import { create, load, query, remove, update } from "../services/list";

export default {
  namespace: "list",
  state: {
    list: []
  },
  reducers: {
    listSave(state, { payload }) {
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
          /*dispatch({
            type: "query"
          });*/
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
        // empty
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
        // empty
      }
    },
    *update({ payload }, { call, put }) {
      try {
        const { success } = yield call(update, payload);

        if (success) {
          yield put({
            type: "query"
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
        // empty
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
        // empty
      }
    },
    *load({ payload }, { call, put }) {
      try {
        const { data, success } = yield call(load, payload);

        if (success) {
          yield put({
            type: "listSave",
            payload: [data]
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
        // empty
      }
    }
  }
};
