<template>
  <div class="ncm-header">
      <div class="btns">
        <slot name="left"></slot>
      </div>
      <div class="middle">
          <slot></slot>      
      </div>
      <div class="btns">
        <slot name="right"></slot>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.ncm-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: $headerHeight;
  background: $baseColor;
  color: #ffffff;

  .btns {
    @include flexCenter;
    // width: 1.256039rem;
    .iconfont {
      @include font-dpr(22px);
      margin: 0.281804rem;
    }
  }
  .middle {
    // flex: auto;
    @include flexCenter;
    position: absolute;
    width: 100%;
    height: 100%;
    @include font-dpr(18px);
  }
}
</style>

