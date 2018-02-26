<template>
    <transitionRightToLeft>
        <div class="comments">
            <ncm-header>
                <i class="iconfont icon-you-copy" slot="left" @click="back"></i>
                评论
                <!-- <i class="iconfont icon-gengduo" slot="right"></i> -->
                <img src="~assets/img/music-playing.gif" alt="" slot="right" v-if="miniMusicPlaying" @click="open_music">
                <img src="~assets/img/music-pause.png" alt="" slot="right" v-else-if="miniMusicPause" @click="open_music">
            </ncm-header>
            <div ref="content" class="music-comments-wrap">
                <div>
                    <div class="current-music-info">
                        <div class="music-pic"><img :src="currentMusic.album?currentMusic.album.picUrl:''" alt=""></div>
                        <div class="info-detail">
                            <div class="music-name">{{currentMusic.name}}</div>
                            <div class="singer-name">{{currentMusic.artists | singerName}}</div>
                        </div>
                    </div>
                    <div>
                        <div class="title">精彩评论</div>
                        <div class="comments-list">
                            <comment-item v-for="(com,index) in hotComments" :key="index" :commentInfo='com'></comment-item>
                        </div>
                        <div class="title">最新评论
                            <template v-if="newComments && newComments.length>0"></template>({{newComments}})</div>
                        <div class="comments-list">
                            <comment-item v-for="(com,index) in newComments" :key="index" :commentInfo='com'></comment-item>
                        </div>
                    </div>
                </div>

            </div>
            <div class="_pad"></div>
        </div>
    </transitionRightToLeft>
</template>
<script>
import ncmHeader from "utils/header/header";
import commentItem from "pages/comment/comment-item";

import transitionRightToLeft from "base/transition/rightToLeft";
import BScroll from "better-scroll";

import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      newComments: [],
      hotComments: []
    };
  },
  props: ["commentsId"],
  created() {
    const _this = this;
    console.log(this.commentsId);
    this.$axios
      .get(`/api/comment/music?id=${_this.commentsId}&limit=40`)
      .then(res => {
        console.log(res);
        this.newComments = res.data.comments;
        this.hotComments = res.data.hotComments;
      });
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
  components: {
    ncmHeader,
    transitionRightToLeft,
    commentItem
  },
  computed: {
    ...mapGetters(["miniMusicPlaying", "miniMusicPause", "currentMusic"])
  },
  methods: {
    back() {
      this.$emit("closeComments");
    },
    open_music() {
      this.OPEN_MUSIC();
    },
    ...mapMutations(["OPEN_MUSIC"])
  },
  filters: {
    singerName(value) {
      const arr = [];
      if (value && value.length >= 1) {
        value.map(m => {
          arr.push(m.name);
        });
      }
      return arr.join("/");
    }
  }
};
</script>
<style lang="scss" scoped>
.comments {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  .current-music-info {
    display: flex;
    padding: 0.241546rem;
    .music-pic {
      flex: none;
      width: 1.932367rem;
      height: 1.932367rem;
      overflow: hidden;
      margin-right: 0.273752rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .music-name,
    .singer-name {
      @include font-dpr(12px);
    }
    .music-name {
      color: $baseFontColor;
      margin-bottom: 0.466989rem;
    }
    .singer-name {
      color: #5e7fad;
    }
    .info-detail {
      flex: auto;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }
  .music-comments-wrap {
    flex: auto;
    overflow: scroll;
  }
  .title {
    height: 0.603865rem;
    line-height: 0.603865rem;
    padding-left: 0.241546rem;
    @include font-dpr(12px);
    background: #efeff0;
    color: #605f60;
  }
}
._pad {
  flex: none;
  height: 1px;
  background: transparent;
}
</style>
