<template>
  <div class="smallTopic">
      {{title}} <span class="iconfont icon-you"></span> 
  </div>
</template>
<script>
export default {
  props:['title']
}
</script>
<style lang="scss">
.smallTopic{
    @include flexCenterH;
    padding-left: ui2css(24);
    border-left: ui2css(6) solid $baseColor;
    font-size: ui2css(48);
    color: $baseFontColor;
    .iconfont{
        color: $base666Color;
        font-size: ui2css(42);
        margin-left: ui2css(30);
    }
}
</style>
