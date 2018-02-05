<template>
  <div class="music-item">
      <div class="index">
          <slot></slot>
      </div>
      <div class="music-box">
            <div class="name">
                <div class="mname">{{musicInfo.name}}</div>
                <div class="aname">{{musicInfo.al.name}}</div>
            </div>
            <div class="handle">
                <span v-if="!musicInfo.mv == 0"><i class="iconfont icon-shipin"></i></span>
                <span><i class="iconfont icon-gengduo"></i></span>
            </div>
      </div>
      
  </div>
</template>
<script>
export default {
  props: ["musicInfo"],
  created() {
    
  }
};
</script>
<style lang="scss">
.music-item {
  display: flex;
  height: 1.320451rem;
  .index {
    display: flex;
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
    .mname {
      @include font-dpr(16px);
      margin-bottom: 0.144928rem;
    }
    .aname {
      @include font-dpr(12px);
      color: #7d7d7e;
    }
    .iconfont {
      margin-right: 0.362319rem;
      @include font-dpr(16px);
      color: #7d7d7e;
    }
  }
}
</style>
