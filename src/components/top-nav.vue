<template>
  <nav id="top-nav">
    Menu navigation
  </nav>
</template>

<script>
export default {
  name: 'top-nav',
};
</script>


<style lang="less">
  @import "../styles/global-style-settings.less";

  #top-nav{
    grid-area: topNav;
    background-color:green;
  }

</style>
