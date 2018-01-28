<template>
  <div class="search">
      <span class="iconfont icon-huatong"></span>
      <mInput></mInput>
      <span class="iconfont icon-zhutu"></span>
  </div>
</template>
<script>
import mInput from "utils/input/input";


export default {
  data() {
    return {

    };
  },
  components: {
    mInput,
  }
};
</script>
<style lang="scss">
.search {
  display: flex;
  height: $headerHeight;
  align-items: center;
  background: $baseColor;
  .iconfont{
      flex: none;
      width: ui2css(156);
      text-align: center;
      font-size: ui2css(72);
      color: #ffffff;
  }
}
</style>

