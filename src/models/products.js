export default {
  namespace: "products",
  state: [],
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    add(state, { payload: name }) {
      const max = state.reduce((prev, cur) => Math.max(prev, cur.id), 0);
      const item = { id: max + 1, name };
      console.log(item);
      return state.concat(item);
    }
  }
};
