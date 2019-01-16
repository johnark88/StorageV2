import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  user: null,
  appUser: {},
};

const mutations = {
  updateUser(state, { user }) {
    Vue.set(state, 'user', user);
  },
  updateAppUser(state, payLoad) {
    state.appUser = payLoad.appUser;
    console.log(state.appUser);
  },
};
const actions = {
};

const getters = {
  user: state => state.user,
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;
