<template>
  <transition name="rightToLeft">
    <slot></slot>
  </transition>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.rightToLeft-enter {
  transform: translateX(100%);
}
.rightToLeft-enter-active {
  transition: all 0.4s;
}
.rightToLeft-leave-active {
  transition: all 0.4s;
  transform: translateX(100%);
}

</style>
