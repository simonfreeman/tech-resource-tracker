<template>
  <div id="app">
    <div id="page-wrapper">
      <site-header/>
      <top-nav/>
      <router-view id="main-content"/>
      <site-footer/>
    </div>
  </div>
</template>

<script>
import SiteHeader from '@/components/site-header';
import TopNav from '@/components/top-nav';
import SiteFooter from '@/components/site-footer';

export default {
  name: 'App',
  components: {
    SiteHeader,
    TopNav,
    SiteFooter,
  },
};
</script>

