<template>
  <div class="feeds-section">
      <basic-feed-item v-for="feed in feeds" v-bind:key="feed.feedId" v-bind="feed" />
  </div>
</template>

<script>

import BasicFeedItem from '@/components/basic-feed-item';

export default {
  name: 'view-all-feeds',
  components: {
    BasicFeedItem,
  },
  mounted() {
    this.populateFeedLost();
  },
  methods: {
    populateFeedLost() {
      fetch('https://localhost:5001/api/feeds')
        .then(response => response.json())
        .then((data) => {
          this.feeds = data;
        });
    },
  },
  data() {
    return {
      feeds: [],
    };
  },
};
</script>


<style lang="less">
  @import "../styles/global-style-settings.less";

 .feeds-section{
    display:flex;
  }
</style>
