import firebase from 'firebase/app';
import store from '../store/store';
import { TokenService } from './TokenService';
import apiService from './apiService';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC_3YMsGl5cgf8Xd8CO_oKQ3o2Z14xPPgk',
  authDomain: 'photostorage-224716.firebaseapp.com',
  databaseURL: 'https://photostorage-224716.firebaseio.com',
  projectId: 'photostorage-224716',
  storageBucket: 'photostorage-224716.appspot.com',
  messagingSenderId: '91012582944',
  scopes: ['profile', 'email'],
};

firebase.initializeApp(config);
// google auth
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
// add scopes for other google apis
// provider.addScope();

const userService = {
  providerLogin: async () => {
    auth.signInWithPopup(provider)
      .then((user) => {
        // const fullName = user.user.displayName;
        // firstName = fullName.split(' ')[0];
        // lastName = fullName.split(' ')[1];
        // uid = user.user.uid;
        // email = user.user.email;
        // photoUrl = user.user.photoURL;
        // idToken = user.credential.idToken;
        // accessToken = user.credential.accessToken;
        // how to tell if its a first time user or returning with google?
        // this.getUserProfile();
        // this.saveUserProfile();
        TokenService.saveToken(user.credential.accessToken);
        apiService.setHeader(user.credential.accessToken);
        return user.credential.accessToken;
      })
      .catch((error) => {
        const sendErrors = [];
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        sendErrors.push(errorCode, errorMessage, email, credential);
        return sendErrors;
      });
  },
  login: async (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  },
  register: async (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  },
  logout: async () => {
    await auth.signOut();

  },
  // verify Token with backend - firebase
};// end userService

export default userService;
