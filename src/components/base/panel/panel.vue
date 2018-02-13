<template>
  <router-link :to="/musiclist/+listId" tag="div" class="ncm-panel">
    <div class="pic">
      <slot name="pic"></slot>
    </div>
    <div class="content">
      <div class="info">
        <div class="name">
          <slot name="name"></slot>
        </div>
        <div class="listnum">
          <slot name="listnum"></slot>
        </div>
      </div>
      <div class="count">
        <slot name="count"></slot>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["listId"]
};
</script>
<style lang="scss">
.ncm-panel {
  display: flex;
  // height: 1.320451rem;
  .pic {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.072464rem 0.241546rem 0.072464rem 0.144928rem;
    width: 1.304348rem;
    height: 1.304348rem;
    img {
      width: 100%;
    }
    .iconfont {
      color: $baseColor;
      @include font-dpr(24px);
    }
  }
  .content {
    display: flex;
    flex: auto;
    justify-content: space-between;
    border-bottom: 1px solid #e2e2e3;
    .info {
      display: flex;
      // align-items: center;
      justify-content: center;
      flex-direction: column;
      flex: 1;
      @include font-dpr(16px);
      color: $baseFontColor;
      .name {
        @include font-dpr(16px);
        margin-bottom: 0.161031rem;
      }
      .listnum {
        @include font-dpr(12px);
        color: #979798;
      }
    }
    .count {
      display: flex;
      align-items: center;
      @include font-dpr(10px);
      color: #979798;
      padding: 0 0.241546rem;
      .iconfont {
        @include font-dpr(12px);
        color: #e1e2e3;
        margin-left: 0.177134rem;
      }
    }
  }
}
</style>
