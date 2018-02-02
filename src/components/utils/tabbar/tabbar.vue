<template>
  <div class="ncm-tabbar">
    <router-link to="/findmusic"  class="ncm-item">
        <div class="icon"><i class="iconfont icon-zhanghao"></i></div>
        <span class="text">发现音乐</span>   
    </router-link>
    <router-link to="/minemusic"  class="ncm-item">
        <div class="icon"><i class="iconfont icon-iconset0163"></i></div>
        <span class="text">我的音乐</span>   
    </router-link>
    <router-link to="/friend"  class="ncm-item">
        <div class="icon"><i class="iconfont icon-pengyou" ></i></div>
        <span class="text">朋友</span>   
    </router-link>
    <router-link to="/account" class="ncm-item">
        <div class="icon"><i class="iconfont icon-zhanghao"></i></div>
        <span class="text">账号</span>   
    </router-link>
    
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.ncm-tabbar {
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 999;
  background: rgba($tabbarBg, 0.9);
  height: $tabbarHeight;
}
.ncm-item {
  flex: 1;
  text-align: center;
  .icon {
    margin: 0.201288rem auto;
    width: 0.402576rem;
    height: 0.402576rem;
    @include flexCenter;
    .iconfont {
      @include font-dpr(26px);
    }
  }
  .text {
    @include font-dpr(12px);
  }
  .iconfont,
  .text {
    color: rgba(#ffffff, 0.4);
  }
}
.active {
  .iconfont,
  .text {
    color: #ffffff;
  }
}
</style>
