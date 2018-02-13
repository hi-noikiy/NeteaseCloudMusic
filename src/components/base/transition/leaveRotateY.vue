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
.rotateY-leave-active{
    transition: all .4s;
    transform: rotateY(90deg);
}
.rotate-leave-to{
    
}
</style>

