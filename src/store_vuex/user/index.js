export default {
  state: {
    user: Object.create(null)
  },
  getters: {
    getUser(state) {
      return state;
    }
  },
  actions: {},
  mutations: {
    setUser(state, value) {
      state.user = value;
    }
  }
};
