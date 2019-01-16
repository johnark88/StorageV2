<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col>
          <h1>Welcome Home page</h1>
          <homeComponent />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import homeComponent from '@/components/homeComponent.vue';
export default {
  name: 'home',
  components: {
    homeComponent
  },
  data() {
    return {

    };
  },
  methods: {
    
  },
};
</script>
<style scoped lang="scss">

</style>
