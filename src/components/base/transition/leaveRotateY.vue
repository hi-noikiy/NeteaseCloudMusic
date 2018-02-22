<template>
  <transition name="rotateY">
      <slot></slot>
  </transition>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.rotateY-enter{
    transform: translateY(100%);
}
.rotateY-enter-active{
    transition: all .4s;
}
.rotateY-leave-active{
    transition: all .4s;
    transform: rotateY(90deg);
}
</style>

