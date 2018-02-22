<template>
  <div class="ncm-cell-group">
      <slot></slot>
  </div>
</template>
<style lang="scss">
.ncm-cell-group{
    margin-top: .241546rem /* 30/124.2 */;
    .ncm-cell{
        margin-top: 0;
    }
    &:not(:last-child){
        .ncm-cell-content{
            border-bottom: 1px solid #e2e2e3;
        }
    }
}
</style>
