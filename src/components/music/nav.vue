<template>
  <div class="nav">
      <span class="item">
        <router-link to="/findmusic/music">音乐</router-link>
      </span>
      <span class="item">
        <router-link to="/findmusic/mv">视频</router-link>  
      </span>
      <span class="item">
        <router-link to="/findmusic/radio">电台</router-link>   
      </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  }
};
</script>
<style lang="scss">
.nav {
  display: flex;
  height: .966184rem;
  @include font-dpr(14px);
  background: rgba(#ffffff,.9);
  .item {
    display: flex;
    justify-content: center;
    flex: 1;
    a{
      @include flexCenterH;        
    }
  }
  .active {
      color: $baseColor;
      border-bottom: .016103rem solid $baseColor;
  }
}
</style>

