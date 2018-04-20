<template>
    <div class="basic-feed-item" >
      <div class="feed-info">
        <img :src="feedImageUrl" :alt="feedName" class="basic-feed-item-image"/>
        <div class="feed-info-text-section">
          <p>{{feedName}}</p>
          <p>{{unseen}} new</p>
        </div>
      </div>
      <div class="latest-feed-item">
        <p>Latest: {{formattedDate}}</p>
        <p>{{latestName}}</p>
      </div>
    </div>
</template>

<script>


const formatDate = (myDate) => {
  const options = { year: '2-digit', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  return myDate.toLocaleString('en-GB', options);
};

export default {
  name: 'basic-feed-item',
  props: {
    feedId: {
      type: Number,
      required: true,
    },
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
    feedUrl: {
      type: String,
      required: true,
    },
  },
  computed: {
    formattedDate() { return formatDate(this.latestDate); },
  },
};
</script>

<style lang="less">
  @import "../styles/global-style-settings.less";

  .basic-feed-item{
    flex: 1 1 0;
    background-color:black;
    justify-content:space-between;
    max-width:300px;
    margin:5%;
    margin-top:10px;
    margin-bottom:10px;
    border-radius:10px;
  }

  .feed-info{
    display:flex;
    border-bottom: 1px white dashed;
    margin:5px;
  }

  .basic-feed-item-image{
    max-width: 60px;
    height:60px;
    margin-top:10px;
    margin-left:10px;
    width:auto;
    justify-content: space-between;
     flex: 1 1 0;
  }

  .feed-info-text-section{
    display:inline-block;
    flex: 1 1 0;
    margin-left: 15px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    text-align:center;
  }

  .latest-feed-item{
    text-align:center;
    margin:10px;
  }

  .latest-feed-item p{
    margin-top:5px;
    margin-bottom:5px;
  }
</style>
