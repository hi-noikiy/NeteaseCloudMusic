<template>
    <div class="ncm-cell">
        <div class="icon">
            <slot name="icon"></slot>
        </div>
        <div class="ncm-cell-content">
            <div class="ncm-cell-title">
                <slot name="title"></slot>
            </div>

            <div class="cell-right">
                <span class="remind" v-if="remind">
                    {{remind}}
                </span>
                <i class="iconfont icon-you"></i>
            </div>
        </div>

    </div>
</template>
<script>
export default {
  props: ["remind"]
};
</script>

<style lang="scss">
.ncm-cell {
  display: flex;
  height: 1.086957rem;
  margin-top: 0.241546rem;
  background: #ffffff;
  .icon {
    width: 1.078905rem;
    flex: none;
    display: flex;
    justify-content: center;
    align-items: center;
    .iconfont {
      @include font-dpr(16px);
      color: #8f8e93;
    }
  }
  .ncm-cell-content {
    display: flex;
    flex: auto;
    .ncm-cell-title {
      display: flex;
      align-items: center;
      flex: auto;
      @include font-dpr(15px);
      color: $baseFontColor;
    }
    .cell-right {
      display: flex;
      flex: none;
      align-items: center;
      .remind {
        display: flex;
        width: 0.434783rem;
        height: 0.434783rem;
        border-radius: 50%;
        background: $baseColor;
        color: #ffffff;
        justify-content: center;
        align-items: center;
      }
      .iconfont {
        color: #e1e2e3;
        @include font-dpr(14px);
        margin: 0 0.281804rem;
      }
    }
  }
}
</style>
