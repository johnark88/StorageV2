import Vue from 'vue';
import Router from 'vue-router';
import store from './store/store';
import Home from './views/Home.vue';
import LandingPage from './views/LandingPage.vue';
import signIn from './views/signInView.vue';
import signOut from './views/signOut.vue';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Landing Page',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/LandingPage.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/signInView.vue'),
    },
    {
      path: '/signout',
      name: 'Sign out',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/signOut.vue'),
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
      meta: {
        authRequired: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.state.user) {
      router.push('/');
    } else {
      router.push('/home');
    }
  } else {
    next();
  }
});

export default router;
