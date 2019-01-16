<template>
  <div id="app">
    <div id="nav">
      <Navigation />
    </div>
    <router-view/>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
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
</style>
