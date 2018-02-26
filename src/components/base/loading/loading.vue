<template>
  <div class="ncm-loading">
    <img src="~assets/img/music-playing2.gif" alt="">
      <div class="text">{{text}}</div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "正在加载..."
    }
  }
};
</script>
<style lang="scss" scoped>
.ncm-loading {
  display: flex;
  justify-content: center;
  align-items:center;
  margin-top: .805153rem;
  img{
    margin-right:.120773rem;
  }
  .text {
    @include font-dpr(14px);
    color: $baseFontColor;
  }
}
</style>
