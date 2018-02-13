<template>
  <div class="music-item">
    <div class="index">
      <slot></slot>
    </div>
    <div class="music-box">
      <div class="name">
        <div class="mname">{{musicInfo.name}}</div>
        <div class="aname">{{musicInfo.album.name}}</div>
      </div>
      <div class="handle">
        <span v-if="!musicInfo.mvid == 0">
          <i class="iconfont icon-shipin"></i>
        </span>
        <span>
          <i class="iconfont icon-gengduo"></i>
        </span>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: ["musicInfo"],
  created() {}
};
</script>
<style lang="scss">
.music-item {
  display: flex;
  height: 1.320451rem;
  .index {
    display: flex;
    flex: none;
    width: 1.014493rem;
    justify-content: center;
    align-items: center;
    @include font-dpr(12px);
    color: #979798;
  }
  .music-box {
    flex: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e2e2e3;
    .name{
      width: 6.924316rem /* 860/124.2 */;
      flex: none;
    }
    .mname {
      @include font-dpr(16px);
      @include text-overflow();
      margin-bottom: 0.144928rem;
    }
    .aname {
      @include font-dpr(12px);
      @include text-overflow();      
      color: #7d7d7e;
    }
    .iconfont {
      @include font-dpr(16px);
      color: #7d7d7e;
    }
    .handle{
      flex: none;
      span{
        padding: 0 .241546rem /* 30/124.2 */;
      }
    }
  }
}
</style>
