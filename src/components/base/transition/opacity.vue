<template>
  <transition name='opacity'>
      <slot></slot>
  </transition>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.opacity-enter{
    opacity: 0;
}
.opacity-enter-active{
    transition: all .4s;
}
.opacity-leave-active{
    transition: all .4s;
}
</style>
