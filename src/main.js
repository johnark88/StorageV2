import '@babel/polyfill';
import Vue from 'vue';
import './plugins/fontawesome';
import './plugins/bootstrap-vue';
import './plugins/axios';
import './plugins/vee-validate';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';
import FirebasePlugin from '../firebasePlugin';

Vue.use(FirebasePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
