export default {
  state: {
    cartList: [],
    cartInfos: Object.create(null)
  },
  getters: {
    get_cartList(state) {
      return state.cartList;
    },
    get_cartInfos(state) {
      let cartInfos = {
        total_nums: 0,
        total_price: 0
      };
      let cartList = state.cartList;
      if (cartList[0]) {
        cartList.map(item => {
          cartInfos.total_nums += parseInt(item.num);
          cartInfos.total_price += parseInt(item.price);
        });
      }
      state.cartInfos = cartInfos;
      return state.cartInfos;
    }
  },
  actions: {},
  mutations: {
    set_cartList(state, value) {
       console.log(state.cartList)
      state.cartList.push(value);
    },
    set_cartInfos(state, value) {
      state.cartInfos = value;
    },
    deleteItemFromCart(state, value) {
      console.log(state.cartInfos)
      // state.cartList.splice(index, 1);
    }
  }
};
