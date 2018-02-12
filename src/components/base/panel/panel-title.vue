<template>
  <div>
    <div class="ncm-panel-title">
      <div class="title-box" @click="openList()">
        <i class="iconfont icon-you" :class="{openicon:listState}"></i>
        <span class="text">{{title}}({{count}})</span>
      </div>
      <div class="btns">
        <i class="iconfont icon-gengduo"></i>
      </div>
    </div>
    <openlist>
      <div class="panel-list-box" v-show="listState">
        <slot></slot>
      </div>
    </openlist>
  </div>

</template>
<script>
import openlist from "base/transition/openlist";
export default {
  data() {
    return {
      listState: false
    };
  },
  props: {
    title: {
      default: "我创建的歌单123",
      type: String
    },
    count: {
      default: 0,
      type: Number
    }
  },
  methods: {
    openList() {
      this.listState = !this.listState;
    }
  },
  computed: {
    listHeight() {}
  },
  components: {
    openlist
  }
};
</script>

<style lang="scss">
.ncm-panel-title {
  display: flex;
  height: 0.724638rem;
  background: #efeff0;
  padding: 0 0.241546rem;
  color: $baseFontColor;
  .title-box,
  .btns {
    display: flex;
    align-items: center;
    @include font-dpr(12px);
  }
  .title-box {
    flex: auto;
    .iconfont {
      transition: all 0.4s;
    }
    .openicon {
      transform: rotate(90deg);
    }
    .text {
      margin-left: 0.257649rem;
    }
  }
  .btns {
    flex: none;
  }
}
// .panel-list-box {
//   transition: all 0.4s;
// }
</style>
