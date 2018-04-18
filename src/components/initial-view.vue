<template>
  <section id="feeds-section">
    <component v-bind:is="currentViewComponent.component"/>
  </section>
</template>

<script>
import ViewAllFeeds from '@/components/view-all-feeds';

const feeds = [
  {
    id: 1,
    feedName: 'uncanny county',
    feedUrl: 'https://audioboom.com/channels/4741997.rss',
    unseen: 5,
    latestDate: new Date(2018, 2, 22, 22, 22, 22, 12),
    latestName: 'Thing',
    feedImageUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  },
  {
    id: 2,
    feedName: 'uncannydadddaaaada',
    feedUrl: 'https://rss.acast.com/thetipoff',
    unseen: 3,
    latestDate: new Date(2018, 1, 11, 11, 11, 11, 11),
    latestName: 'OtherThing',
    feedImageUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  },
  {
    id: 3,
    feedName: 'fffffffffff',
    feedUrl: 'https://rss.acast.com/thetipoff',
    unseen: 2,
    latestDate: new Date(2018, 1, 11, 11, 11, 11, 11),
    latestName: 'OtherThingthesecsefsdf',
    feedImageUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  },
];

const feedViewComponents = [
  {
    name: 'viewAll',
    component: {
      template: '<view-all-feeds :feeds="feeds" />',
      components: {
        ViewAllFeeds,
      },
      data() {
        return {
          feeds,
        };
      },
    },
  },
];


export default {
  name: 'intial-view',
  data() {
    return {
      feedViewComponents,
      currentViewComponent: feedViewComponents[0],
    };
  },
};
</script>

<style lang="less">
  @import "../styles/global-style-settings.less";
  #feeds-section{
    display:flex;
  }
</style>
