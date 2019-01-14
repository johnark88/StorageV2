<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable class="mainNavBar">
      <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">
          <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="BV">
          BootstrapVue
        </b-navbar-brand>
        <b-collapse is-nav id="nav_text_collapse">
          <b-navbar-nav >
            <b-nav-item><router-link to="#">Home</router-link></b-nav-item>
            <b-nav-item><router-link to="#">Upload</router-link></b-nav-item>
            <b-nav-item><router-link to="#">Files</router-link></b-nav-item>
            <!-- <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item><router-link to="/">Home</router-link></b-nav-item> -->
            <b-nav-item-dropdown text="User" right>
              <b-dropdown-item href="#">Account</b-dropdown-item>
              <b-dropdown-item href="#">Settings</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
        <!-- v-show="!userStatus" -->
        <b-nav-item > <router-link to="/login">Sign in</router-link> </b-nav-item>
        <!-- <b-nav-item v-show="userStatus">  </b-nav-item> -->
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>
<script>
import signIn from '@/components/signIn.vue';
export default {
  name: 'App',
  components: {
   signIn
  },
  data() {
    return {

    };
  },
};
</script>
<style lang="scss">

body,
html {
  background-color: #fff;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.nav-item {
  list-style: none;
}
</style>
