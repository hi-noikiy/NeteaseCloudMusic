<template>
  <div class="ncm-bottomSheet">
    <div class="b-sheet-header-wrap">
      <div class="title">
        <i class="iconfont" :class="{'icon-xunhuan':mode == 0,'icon-danquxunhuan':mode == 1,'icon-suijibofang':mode == 2}" @click='changeMode'></i> {{modetext}}
        <template v-if="mode == 0 ||mode == 2">({{playList.length}})</template>
      </div>
      <div class="delete">
        <i class="iconfont icon-qingkong" @click="clear"></i>
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
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      toastMsg: "",
      toast: false
    };
  },
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
    },
    changeMode() {
      const _this = this;
      this.SET_MUSIC_PLAYMODE();
      this.setSequence();

      const arr = ["列表循环", "单曲播放", "随机播放"];
      this.toastMsg = arr[this.mode];
      this.toast = true;
      if (this.toastTimer) clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.toast = false;
      }, 1000);
    },
    clear() {
      this.CLEAR_SEQUENCE_LIST();
      this.OPEN_MUSIC(false);
      this.$emit("closeBottomSheet");
      this.SET_PAGE_FIXED(false);
    },
    setSequence(mode = this.mode, list = this.playList) {
      let newlist = list.slice(0);
      if (mode == 0 || mode == 1) {
        this.SET_MUSIC_SEQUENCE(newlist);
      } else if (mode == 2) {
        newlist.sort(function(a, b) {
          return Math.random() - 0.5;
        });
        // console.log("打乱列表2");
        // console.log(newlist);
        this.SET_MUSIC_SEQUENCE(newlist);
      }
    },
    ...mapMutations([
      "SET_MUSIC_PLAYMODE",
      "SET_MUSIC_SEQUENCE",
      "CLEAR_SEQUENCE_LIST",
      "OPEN_MUSIC",
      "SET_PAGE_FIXED"
    ])
  },
  computed: {
    modetext() {
      const arr = ["列表循环", "单曲循环", "随机播放"];
      return arr[this.mode];
    },
    ...mapState(["mode", "playList", "currentMusicID"])
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
