<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {

  },
  data() {
    return {

    };
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body,
html {
   background-color: $colorWhite;
}

</style>