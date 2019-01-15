<template>
  <div class="signInView">
    <b-container fluid class="signInContainer">
      <b-row align-h="start" class="mainRow">
        
        <!-- Left side -->
        <b-col cols="6" class="leftColumn">
          <b-row>
            <b-col cols="8" sm="6">
              Level 2: cols="8" sm="6"
            </b-col>
            <b-col cols="4" sm="6">
              Level 2: cols="4" sm="6"
            </b-col>
          </b-row>
        </b-col>

        <!-- Right side -->
        <b-col cols="6" class="rightColumn">
          <b-row>
            <b-col cols="12" sm="7">
              <b-btn>Sign In with Google </b-btn>
              <hr>
               <signInRegister />
            </b-col>
            <!-- <b-col cols="4" sm="6">
             Level 2: cols="8" sm="6"
            </b-col> -->
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import signInRegister from '@/components/signInRegister.vue';
export default {
  name: 'signInView',
  components: {
   signInRegister,
  },
  data() {
    return {
    };
  },
};
</script>
<style scoped lang="scss">
.signInContainer {
  padding-top: 126px;
}
</style>
