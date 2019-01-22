<template>
<div class="Navigation">
<b-navbar toggleable class="mainNavBar">
  <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/home">
      <!-- <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="BV"> -->
      BootstrapVue
    </b-navbar-brand>
    <b-collapse is-nav id="nav_text_collapse">
      <!-- <b-navbar-nav >
        <b-nav-item><router-link to="/home">Home</router-link></b-nav-item>
        <b-nav-item><router-link to="#">Upload</router-link></b-nav-item>
        <b-nav-item><router-link to="#">Files</router-link></b-nav-item>
        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav> -->
    </b-collapse>
    <!-- v-show="!userStatus" -->
    <b-nav-item v-show="!userStatus" > <router-link to="/login">Sign in</router-link> </b-nav-item>
    <b-nav-item v-show="userStatus" @click="signOut"> Sign out </b-nav-item>
    </b-navbar>
  </div>
</template>
<script>
import userService from  '../services/userService';
import { TokenService } from '../services/TokenService';

export default {
  name: 'Navigation',
  data() {
    return {
      userStatus: false,
    };
  },
  watch: {
    user(auth) {
      if (!auth) {
        console.log('no auth')
        this.$router.replace('/login');
      } else {
        this.userStatus = true;
      }
    },
  },
  methods: {
    async signOut() {
      console.log('logging out');
      await this.$auth.logout();
      this.$router.replace('/signout');
    },
  },
};
</script>
<style scoped lang="scss">
.nav-item {
  list-style: none;
}
</style>
