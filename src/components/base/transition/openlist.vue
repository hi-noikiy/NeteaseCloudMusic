<template>
  <transition name="openlist">
      <slot></slot>
  </transition>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.openlist-enter{
    height: 0;
    // overflow: hidden;
}
.openlist-enter-active{
    transition: all 40s;
}
</style>

