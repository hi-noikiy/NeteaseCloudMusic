<template>
    <div class="ncm-bottomSheet">
        <div class="b-sheet-header-wrap">
            <div class="title">
                <i class="iconfont" :class="{'icon-xunhuan':mode == 0,'icon-danquxunhuan':mode == 1,'icon-suijibofang':mode == 2}"></i> {{modetext}}
                <template v-if="playList.length>0">({{playList.length}})</template>
            </div>
            <div class="delete">
                <i class="iconfont icon-qingkong"></i>
            </div>
        </div>
        <div class="b-sheet-content-wrap" ref="content">
            <div class="b-sheet-list">
                <slot></slot>
            </div>
        </div>

        <div class="b-sheet-footer-wrap" @click="closeBottomSheet">关闭</div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";
export default {
  mounted() {
    this.$nextTick(function() {
      const content = this.$refs.content;
      let scroll = new BScroll(content, {
        scrollY: true,
        click: true
      });
    });
  },
  methods: {
    closeBottomSheet() {
      this.$emit("closeBottomSheet");
    }
  },
  computed: {
    modetext() {
      const arr = ["列表循环", "单曲循环", "随机播放"];
      return arr[this.mode];
    },
    ...mapState(["mode", "playList"])
  }
};
</script>
<style lang="scss">
.ncm-bottomSheet {
  background: rgba(#ffffff, 0.6);
  height: 12.640902rem;
  position: relative;
  display: flex;
  flex-direction: column;
  color: $baseFontColor;
  .b-sheet-header-wrap {
    display: flex;
    flex: none;
    height: 1.207729rem;
    border-bottom: 1px solid #bfc6bd;
    align-items: center;
    .title {
      display: flex;
      align-items: center;
      flex: auto;
      @include font-dpr(13px);
      .iconfont {
        color: #999999;
        @include font-dpr(18px);
        margin: 0 0.241546rem;
      }
    }
    .delete {
      color: #999999;
      @include font-dpr(18px);
      margin: 0 0.362319rem;
    }
  }
  .b-sheet-content-wrap {
    flex: auto;
    overflow: scroll;
    .b-sheet-list {
      padding-left: 0.241546rem;
    }
  }
  .b-sheet-footer-wrap {
    height: 1.320451rem;
    display: flex;
    flex: none;
    justify-content: center;
    align-items: center;
    @include font-dpr(16px);
    border-top: 1px solid #bfc6bd;
  }
}
</style>
