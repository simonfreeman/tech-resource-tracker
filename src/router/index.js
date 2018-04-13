import Vue from 'vue';
import Router from 'vue-router';
import InitialView from '@/components/initial-view';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InitialView',
      component: InitialView,
    },
  ],
});
