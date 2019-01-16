<template>
  <div class="signOut">
    <b-container>
      <b-row>
        <b-col>
          <h1>You have Signed out</h1>
          <h4><router-link to="/login">Log back in</router-link></h4>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
// import homeComponent from '@/components/homeComponent.vue';
export default {
  name: 'signOut',
  components: {
    // homeComponent,
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
