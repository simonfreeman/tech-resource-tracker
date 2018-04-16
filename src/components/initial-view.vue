<template>
    <component v-bind:is="currentViewComponent.component">fff</component>
</template>

<script>
import ViewAllSources from '@/components/view-all-sources';

const fakeSources = [
  {
    name: 'uncanny county',
    url: 'https://audioboom.com/channels/4741997.rss',
  },
  {
    name: 'uncanny county',
    url: 'https://rss.acast.com/thetipoff',
  },
];

const sourceViewComponents = [
  {
    name: 'viewAll',
    component: {
      template: '<view-all-sources :sources="fakeSources" />',
      components: {
        ViewAllSources,
      },
      data() {
        return {
          fakeSources,
        };
      },
    },
  },
];


export default {
  name: 'intial-view',
  data() {
    return {
      sourceViewComponents,
      currentViewComponent: sourceViewComponents[0],
    };
  },
};
</script>

<style lang="less">
  @import "../styles/global-style-settings.less";
</style>
