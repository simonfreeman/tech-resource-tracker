<template>
  <section>
    <component v-bind:is="currentViewComponent.component"/>
  </section>
</template>

<script>
import ViewAllFeeds from '@/components/view-all-feeds';

const feeds = [
  {
    feedId: 1,
    feedName: 'Uncanny County',
    feedUrl: 'https://audioboom.com/channels/4741997.rss',
    unseen: 5,
    latestDate: new Date(2018, 2, 22, 22, 22, 22, 12),
    latestName: 'Wish You Were Here (S2, Ep6)',
    feedImageUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    feedType: 'podcast',
  },
  {
    feedId: 2,
    feedName: 'CodeBurst',
    feedUrl: 'https://audioboom.com/channels/4741997.rss',
    unseen: 3,
    latestDate: new Date(2018, 1, 11, 11, 11, 11, 11),
    latestName: 'A Simple Guide to ES6 Iterators in JavaScript with Examples',
    feedImageUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    feedType: 'blog',
  },
  {
    feedId: 3,
    feedName: 'The Tip Off',
    feedUrl: 'https://rss.acast.com/thetipoff',
    unseen: 2,
    latestDate: new Date(2018, 1, 11, 11, 11, 11, 11),
    latestName: 'Ep.17 Two sides to the story',
    feedImageUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    feedType: 'podcast',
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
</style>
