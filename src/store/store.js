import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  // google User
  user: null,
  // App user profile
  appUser: null,
};

const mutations = {
  updateUser(state, { user }) {
    Vue.set(state, 'user', user);
  },
  updateAppUser(state, { appUser }) {
    Vue.set(state, 'appUser', appUser);
  },
};
const actions = {
};

const getters = {
  user: state => state.user,
  appUser: state => state.appUser,
  // console.log()
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;
