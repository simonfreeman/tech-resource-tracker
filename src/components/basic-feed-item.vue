<template>
    <div class="basic-feed-item">
      <ul>
        <li>
          <img :src="feedImageUrl" :alt="feedName" class="basic-feed-item-image"/>
        </li>
        <li>
          Feed: {{feedName}}
        </li>
        <li>
          Unseen: {{feedName}}
        </li>
        <li>
          Latest: {{latestDate + " - " + latestName}}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'basic-feed-item',
  props: {
    feedName: {
      type: String,
      required: true,
    },
    unseen: {
      type: Number,
      required: true,
    },
    latestDate: {
      type: Date,
      required: false, // they could wipe the feed I guess
    },
    latestName: {
      type: String,
      required: false, // they could wipe the feed i guess
    },
    feedImageUrl: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="less">
  @import "../styles/global-style-settings.less";

  .basic-feed-item{
    flex: 1 1 0;
    background-color:yellow;
    display:inline-flex;
    height:200px;
  }

  .basic-feed-item-image{
    max-width: 40px;
    height:40px;
    width:auto;
    display:inline-block;
  }
</style>
