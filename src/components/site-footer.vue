<template>
   <footer id="footer">
    <p>©{{new Date().getFullYear()}}</p>
  </footer>
</template>

<script>
export default {
  name: 'site-footer',
};
</script>


<style lang="less">
  @import "../styles/global-style-settings.less";

 #footer{
  grid-area:footer;
  background-color:yellow;
  font-size: @footerHeight / 2 ;
  text-align:center;
  padding-top:@footerHeight / 4;
}
</style>
