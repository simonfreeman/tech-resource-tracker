<template>
  <div class="feeds-section">
      <basic-feed-item v-for="feed in feeds" v-bind:key="feed.feedId" v-bind="feed" />
  </div>
</template>

<script>

import BasicFeedItem from '@/components/basic-feed-item';

export default {
  name: 'view-all-feeds',
  props: {
    feeds: {
      type: Array,
      required: true,
    },
  },
  components: {
    BasicFeedItem,
  },
};
</script>


<style lang="less">
  @import "../styles/global-style-settings.less";

 .feeds-section{
    display:flex;
  }
</style>
