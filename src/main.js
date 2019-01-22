import '@babel/polyfill';
import Vue from 'vue';
import './plugins/fontawesome';
import './plugins/bootstrap-vue';
import './plugins/axios';
import './plugins/vee-validate';
import App from './App.vue';
import router from './router';
import store from './store/store';
import { TokenService } from './services/TokenService';
import './registerServiceWorker';
import ApiService from './services/apiService';


// Vue.use(FirebasePlugin);
// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API);

// If token exists set header
// if (TokenService.getToken()) {
//   ApiService.setHeader();
// }

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
