<template>
  <div class="ncm-loading">
      <div class="icon"></div>
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
  margin-top: .805153rem;
  .text {
    @include font-dpr(14px);
    color: $baseFontColor;
  }
}
</style>
