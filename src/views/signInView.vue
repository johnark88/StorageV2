<template>
  <div class="signInView">
    <b-container fluid class="signInContainer">
      <b-row align-h="center" class="mainRow" no-gutters>
        <b-col sm="4" class="signInContentCol">
          <h4>Blah blah blahg</h4>
        </b-col>
        <b-col sm="4">
          <!-- google sign in button -->
          <googleSignIn v-bind:showRegisterForm="showRegisterForm"/>
          <hr>
          <signInRegister v-on:showRegister="showRegForm" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import googleSignIn from '@/components/googleSignIn.vue';
import signInRegister from '@/components/signInRegister.vue';

export default {
  name: 'signInView',
  components: {
    signInRegister,
    googleSignIn,
  },
  data() {
    return {
      showRegisterForm: false,
    };
  },
  methods: {
    showRegForm(currentVal) {
      this.showRegisterForm = currentVal;
    },
  },
};
</script>
<style scoped lang="scss">
.mainRow {
  padding-top: 126px;
}
</style>
