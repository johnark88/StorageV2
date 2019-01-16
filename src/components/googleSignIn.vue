<template>
  <div class="googleSignIn">
    <!-- Google Sign IN -->
    <button type="button" class="google-button" @click="googleLogin" v-show="!showRegisterForm">
      <span class="google-button__icon">
        <img width="20px" src="../assets/512px-Google__G__Logo.svg.png" alt="">
      </span>
      <span class="google-button__text">Sign in with Google</span>
    </button>
    <!-- Google Sign UP  -->
    <button type="button" class="google-button" @click="googleLogin" v-show="showRegisterForm">
      <span class="google-button__icon">
        <img width="20px" src="../assets/512px-Google__G__Logo.svg.png" alt="">
      </span>
      <span class="google-button__text">Sign up with Google</span>
    </button>
  </div>
</template>
<script>
export default {
  name: 'googleSignIn',
  props: ['showRegisterForm'],
  data() {
    return {
      
    };
  },
  methods: {
    async googleLogin() {
     const auth = await this.$auth.providerLogin()
      .then((user) => {
        console.log(user, 'g sign in');
        console.log(user.credential.idToken);
        this.$router.push('/home');
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(error);
        console.log(error.message);
      })
    }
  }
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto");
.google-button {
  font-family: 'Roboto', sans-serif;
  height: 40px;
  // border-width: 0;
  background: white;
  color: #737373;
  border-radius: 5px;
  white-space: nowrap;
  box-shadow: 1px 1px 0px 1px rgba(0,0,0,0.05);
  transition-property: background-color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
  // padding: 0;
  background-image: url('../assets/googleBlue.png');
  background-repeat: repeat-y;
  background-size: 80% auto;
  background-position: right;
  border: 1px solid #4285F4;
  &:focus,
  &:hover {
    outline:0;
    box-shadow: 1px 4px 5px 1px rgba(0,0,0,0.1);
    cursor: pointer;
  }
  &:active {
    background-color: #f3f3f3;
    box-shadow: none;
    transition-duration: 10ms;
  }
}
    
.google-button__icon {
  display: inline-block;
  vertical-align: middle;
  margin: -7px 24px 0px 8px;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
}

.google-button__text {
  display: inline-block;
  vertical-align: middle;
  padding: 0 24px;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Roboto',arial,sans-serif;
  color: white;
}
</style>
