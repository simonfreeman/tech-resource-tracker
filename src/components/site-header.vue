<template>
 <header id="header">
    <p id="site-name"> Technology Resources for Keeping Up To Date</p>
  </header>
</template>

<script>
export default {
  name: 'site-header',
};
</script>


 <style lang="less">
  @import "../styles/global-style-settings.less";

 #header{
    grid-area: header;
    background-color:red;
  }

  #site-name{
      font-size: @headerHeight / 2 ;
      text-align:center;
      padding-top:@headerHeight / 4;
  }

</style>
