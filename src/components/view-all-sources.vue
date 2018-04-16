<template>
  <div>
   <p> {{sources}}</p>
 </div>
</template>

<script>

export default {
  name: 'view-all-sources',
  props: {
    sources: Array,
    required: true,
  },
};
</script>


<style lang="less">
  @import "../styles/global-style-settings.less";

</style>
