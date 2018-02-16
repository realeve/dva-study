export default {
  namespace: "products",
  state: [],
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    add(state, { payload: name }) {
      let max = state[0].id;
      state.forEach(item => {
        max = Math.max(item.id, max);
      });
      const item = { id: max + 1, name };
      console.log(item);
      return state.concat(item);
    }
  }
};
