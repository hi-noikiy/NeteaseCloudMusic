<template>
  <div class="music-sheet">
      <div class="sheet-head">
          <span class="iconfont icon-bofang"></span>
          <div class="title"><span>播放全部<span class="musiccount">(共{{count}}首)</span></span>
              <span class="duoxuan"><span class="iconfont icon-icon"></span>多选</span>
          </div>
      </div>
      <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
        
    };
  },
  props:['count']
};
</script>
<style lang="scss">
.music-sheet {
  background: #fff;
  color: $baseFontColor;
  padding-bottom: $tabbarHeight;
  .sheet-head {
    height: 1.199678rem;
    display: flex;
    .icon-bofang {
      display: flex;
      justify-content: center;
      align-items: center;
      @include font-dpr(20px);
      width: 1.014493rem;
    }
    .title {
      @include font-dpr(16px);
      flex: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e2e2e3;
      padding-right: 0.273752rem;
      .musiccount {
        color: #979798;
      }
      .duoxuan {
        @include font-dpr(12px);
        .iconfont {
          margin-right: 0.080515rem;
        }
      }
    }
  }
}
</style>

