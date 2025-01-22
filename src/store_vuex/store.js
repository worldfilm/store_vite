import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'
import user from './user/index.js';
import shopping from './shopping/index.js';


  export default createStore({
    modules: {
      user, shopping
    },
    plugins: [createPersistedState({ storage: window.sessionStorage })],
  });
