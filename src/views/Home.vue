<template>
  <div class="home">
     <homeComponent />
  </div>
</template>
<script>
import homeComponent from '@/components/homeComponent.vue';

export default {
  name: 'home',
  components: {
    homeComponent,
  },
  data() {
    return {
     

    };
  },
  methods: {

  },
};
</script>
<style lang="scss">
.homeContainer {
  margin-top: 4em;
}
.folderCard {
  text-align: left;
  // margin: 20px;
  max-width: 20rem;
  max-height: 23em;
  margin: 10px;
}
.card-body {
  padding: 1em;
}
.cardLink{
  float: right;
  text-decoration: none;
}
// Drop down arrow/border box
.cardDropDown {
  color: black; 
  background-color: white; 
  border-color: white; 
}
</style>
