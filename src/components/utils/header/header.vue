<template>
  <div class="ncm-header" :style="{background:bg}">
    <div class="btns">
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot></slot>
      <div v-if=musicTitle class="musicTitle">
        <div class="musicname">
          <slot name="musicname"></slot>
        </div>
        <div class="singername">
          <slot name="singername"></slot>
          <i class="iconfont icon-you"></i>
        </div>
      </div>
    </div>
    <div class="btns">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    musicTitle: false,
    bg: {
      default: "#c4483c"
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
.ncm-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: $headerHeight;
  // background: $baseColor;
  color: #ffffff;
  flex: none;
  .btns {
    position: relative;
    z-index: 10;
    @include flexCenter;
    // width: 1.256039rem;
    .iconfont {
      @include font-dpr(22px);
      margin: 0.281804rem;
    }
    img {
      width: 0.644122rem;
      margin: 0 0.281804rem;
    }
  }
  .middle {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0 1.095008rem;
    @include font-dpr(18px);
    .musicTitle {
      width: 100%;
    }
    .musicname {
      @include font-dpr(15px);
      margin-bottom: 0.112721rem;
      width: 100%;
      @include text-overflow();
    }
    .singername {
      @include font-dpr(12px);
      width: 100%;
      @include text-overflow();

      .iconfont {
        margin-left: 0.096618rem;
      }
    }
  }
}
</style>

