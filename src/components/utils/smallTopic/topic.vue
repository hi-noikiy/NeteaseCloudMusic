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
    padding-left: .193237rem;
    border-left: .048309rem solid $baseColor;
    font-size: .386473rem;
    color: $baseFontColor;
    .iconfont{
        color: $base666Color;
        font-size: .338164rem;
        margin-left: .241546rem;
    }
}
</style>
