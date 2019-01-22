import firebase from 'firebase/app';
import store from '../store/store';
import { TokenService } from './TokenService';
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
    return auth.signInWithPopup(provider);
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
  authState: async (user) => {
    auth.onAuthStateChanged((user) => {
      store.commit('updateUser', { user });
      // store.commit('updateAppUser', { appUser: null });
    });
  },

};// end userService

export default userService;
