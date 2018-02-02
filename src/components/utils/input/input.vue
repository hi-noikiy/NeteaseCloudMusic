<template>
  <div class="input-wrap" :class="sty">
      <input type="text" class="input-control">
  </div>
</template>
<script>
export default {
    props:['sty']

}
</script>
<style lang="scss">
.input-wrap{
    display: flex;
    // width: 306px;
    flex: auto;
    height: .724638rem;
    >.input-control{
        @include font-dpr(14px);
        flex: auto;
        padding-left:.362319rem;
        border-radius: 1.062802rem;
        border: none;
        outline: none;
    }
}
</style>


