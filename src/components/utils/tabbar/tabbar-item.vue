<template>
  <div class="ncm-item">
        <div class="icon">
            <slot name="icon"></slot>
        </div>
        <span class="text">
            <slot></slot>
        </span>   
  </div>
</template>
<style lang="scss">
.ncm-item {
  flex: 1;
  text-align: center;
  .icon {
    margin: 0.161031rem auto;
    width: 0.402576rem;
    height: 0.402576rem;
    @include flexCenter;
    .iconfont {
      font-size: 0.57971rem;
    }
    .text {
      font-size: 0.225443rem;
    }
  }
}
</style>
