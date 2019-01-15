<template>
  <div class="signInRegister">
    <b-card class="userLoginCard">
      <b-form @submit.prevent="submit" id="loginForm">
        <b-form-group id="loginFirstName" label-for="loginFirstName" v-show="showRegister">
          <b-form-input id="loginFirstName" type="text" v-model="loginUser.firstName" v-validate="'required'"
                        placeholder="First name" name="First name">
          </b-form-input>
        </b-form-group>
        <b-form-group id="loginLastName" label-for="loginLastName" v-show="showRegister">
          <b-form-input id="loginLastName" type="text" v-model="loginUser.lastName" v-validate="'required'"
                        placeholder="Last name" name="Last name">
          </b-form-input>
        </b-form-group>
        <b-form-group id="loginEmail" label-for="loginEmail">
          <b-form-input id="loginEmail" type="email" v-model="loginUser.email" 
            v-validate="'required|email'" placeholder="Enter email" name="Email"></b-form-input>
        </b-form-group>
        <b-form-group id="loginPassword" label-for="loginPassword">
          <b-form-input id="logingPassowrd" type="password" v-model="loginUser.password" v-validate="'required|min:7|alpha_num'"
            name="password" placeholder="Enter password"></b-form-input>
        </b-form-group>
        <b-form-text class="text-muted">This page is protected by reCAPTCHA, and subject to the Google <a href="https://www.google.com/policies/privacy/">Privacy Policy</a> and <a href="https://www.google.com/policies/terms/">Terms of service.</a></b-form-text>
        <div class="signInOptions">
          <b-btn @click="submit">Sign in</b-btn>
          <!-- checkBox = remeber me -->
          <!-- forgot password -->
        </div>
      </b-form>
    </b-card>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'signInRegister',
  data() {
    return {
       showRegister: false,
      // return users
      loginUser: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        uid: null,
      },
    };
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    submit() {
      console.log(this.loginUser, 'loginUser');
      this.$emit('loginUser', this.loginUser);
    }
  }
};
</script>
<style scoped lang="scss">
.card {
  border: none;
}
.signInOptions {
  float: right;
  padding-top: 10px;
}
</style>
