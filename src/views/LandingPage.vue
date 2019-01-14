<template>
  <div class="LandingPage">
    <b-container fluid>
      <!--  -->
      <b-row no-gutters class="header" >
       <b-col>
        <b-jumbotron>
          <template slot="header">
            Bootstrap Vue
          </template>
          <template slot="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </template>
          <hr class="my-4">
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <div class="tronButtons">
            <b-btn variant="primary" href="#">Do Something</b-btn>
            <b-btn variant="success" href="#">Do Something Else</b-btn>
          </div>
        </b-jumbotron>
       </b-col>
      </b-row>
      <!--  -->
      <b-row class="pricingTable">
        <b-col></b-col>
      </b-row>
      <!--  -->
      <b-row class="imageSlider">
        <b-col></b-col>
      </b-row>
      <!--  -->
      <b-row class="clients">
        <b-col></b-col>
      </b-row>
      <!--  -->
      <b-row class="connect">
        <b-col></b-col>
      </b-row>
      <!--  -->
      <b-row class="footerMenu">
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'LandingPage',
  data() {
    return {

    };
  },
  methods: {
    signIn() {

    },
    signOut() {

    },
  },
};
</script>
<style scoped lang="scss">
  // navigation
  .mainNavBar {
    display: none;
  }
  // header
  .container-fluid {
    padding: 0;
  }
  .header {
    .tronButtons .btn {
      margin-left: 10px;
    }
    .jumbotron {
      background-color: $colorAqua;
      text-align: left;
    }
  }
</style>
