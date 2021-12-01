import { create, load, query, remove, update } from "../services/list";

export default {
  namespace: "list",
  state: {
    list: [],
  },
  reducers: {
    listSave(state: any, { payload }: any) {
      return {
        ...state,
        list: payload,
      };
    },
  },
  subscriptions: {
    setup() {},
  },

  effects: {
    *create({ payload }: any, { call, put }: any) {
      try {
        const { success } = yield call(create, payload);

        if (success) {
          yield put({
            type: "query",
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
        // empty
      }
    },
    *delete({ payload }: any, { call, put }: any) {
      try {
        const { success } = yield call(remove, payload);

        if (success) {
          yield put({
            type: "query",
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
        // empty
      }
    },
    *update({ payload }: any, { call, put }: any) {
      try {
        const { success } = yield call(update, payload);

        if (success) {
          yield put({
            type: "query",
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
        // empty
      }
    },
    *query({ payload }: any, { call, put }: any) {
      try {
        const { data, success } = yield call(query, payload);

        if (success) {
          yield put({
            type: "listSave",
            payload: data,
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
        // empty
      }
    },
    *load({ payload }: any, { call, put }: any) {
      try {
        const { data, success } = yield call(load, payload);

        if (success) {
          yield put({
            type: "listSave",
            payload: [data],
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
        // empty
      }
    },
  },
};
