<template>
  <transitionRightToLeft>
    <div class="ncm-music">
      <!-- <div v-show="fullPage" class="fullpage-music"> -->
      <ncmHeader bg='tranparent' musicTitle=true class="music-header">
        <i class="iconfont icon-you-copy" slot="left" @click="close"></i>
        <span slot="musicname">{{currentMusic.name}}{{currentMusic.alias | musicName}}</span>
        <span slot="singername">{{currentMusic.artists | singerName}}</span>
        <i class="iconfont icon-zhuanfa" slot="right"></i>
      </ncmHeader>
      <div class="ncm-m-bg"></div>
      <div class="music-wrap">
        <div class="middle-wrap">
          <opacity>
            <div class="disc-box" v-show="disc">
              <div class="disc-wrap">
                <div class="music-box" :class="{'m-disc-pause':playing}">
                  <div class="music-disc disc-rotate" :class="{'disc-pause':!playing}">
                    <div class="ablum-pic">
                      <template v-if="currentMusic.album"><img :src="currentMusic.album.picUrl" alt=""></template>
                    </div>
                  </div>
                </div>
              </div>

              <div class="m-info-btns">
                <i class="iconfont icon-shoucang1"></i>
                <i class="iconfont icon-xiazai2"></i>
                <i class="iconfont icon-pinglun2" @click="openComments"></i>
                <i class="iconfont icon-sandian1"></i>
              </div>
            </div>
          </opacity>
          <opacity>
            <div class="lyrics-box" v-show='!disc' ref="content">
              <div class="lyrics-wrap" ref="lyricList">
                <p v-for="(lyric,index) in currentLyric.lines" ref="lyricLine" :key="index" class="lyric-text" :class="{'current-lyric':currentLineNum == index}">{{lyric.txt}}</p>

              </div>
            </div>
          </opacity>
        </div>

        <div class="music-handle-wrap">
          <div class="m-progress">
            <span class="m-play-time">{{format(currentTime)}}</span>
            <div class="m-progress-wrap">
              <!-- <div class="pro-point"></div>
            <mu-linear-progress mode="determinate" :value="musicProgressValue" /> -->
              <mu-slider class="demo-slider" v-model="musicProgressValue" @change='setProgress' />
            </div>
            <span class="m-count-time">{{format(durationTime)}}</span>
          </div>

          <div class="m-btns">
            <i class="iconfont" :class="{'icon-xunhuan':mode == 0,'icon-danquxunhuan':mode == 1,'icon-suijibofang':mode == 2}" @click="changeMode"></i>
            <mu-toast v-if="toast" :message="toastMsg" @close='hideToast' />
            <i class="iconfont icon-kuaitui" @click="prev"></i>
            <i class="iconfont" :class="{'icon-bofang':!playing,'icon-zanting':playing}" @click="play"></i>
            <i class="iconfont icon-kuaijin" @click="next"></i>
            <i class="iconfont icon-mcaidan" @click="openBottomSheet"></i>
            <button @click="test" style="width:200px;height:200px"></button>
          </div>
        </div>
      </div>
      <!-- 音频 -->
      <audio :src="currentMusic.url" ref="audio" @timeupdate='getCurrentTime' @canplay='musicReady' @ended='musicEnd'></audio>
      <mu-bottom-sheet :open="bottomSheet" @close='closeBottomSheet'>
        <bottomSheet @closeBottomSheet='closeBottomSheet'>
          <bottomSheetItem v-for="(music,index) in sequenceList" :key="index" :music='music'></bottomSheetItem>
        </bottomSheet>
      </mu-bottom-sheet>
      <!-- <comments v-if="comment" @closeComments='closeComments' :commentsId='currentMusic.id'></comments> -->
    </div>
    <!-- </div> -->
  </transitionRightToLeft>

</template>
<script>
import ncmHeader from "utils/header/header";
import transitionRightToLeft from "base/transition/rightToLeft";
import bottomSheet from "utils/bottomSheet/bottomSheet";
import bottomSheetItem from "utils/bottomSheet/bottomSheetItem";
import comments from "pages/comment/comment";
import opacity from "base/transition/opacity";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

import lyric from "lyric-parser";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      currentTime: 0,
      durationTime: 0,
      musicProgressValue: 0,
      toast: false,
      toastMsg: "",
      bottomSheet: false,
      comment: false,
      disc: false,
      currentLyric: {},
      currentLineNum:0
    };
  },
  components: {
    ncmHeader,
    transitionRightToLeft,
    bottomSheet,
    bottomSheetItem,
    comments,
    opacity
  },
  watch: {
    startPlaying: {
      deep: true,
      handler(newval, oldval) {
        const _this = this;
        const musicNoChange = newval.currentMusic == oldval.currentMusic;
        const playing = newval.playing;
        console.log(musicNoChange, playing);
        // 获取歌词
        if (!musicNoChange) {
          this.$axios.get(`/api/lyric?id=${_this.currentMusicID}`).then(res => {
            _this.currentLyric = new lyric(res.data.lrc.lyric, this.handler);
            console.log(_this.currentLyric);
            _this.currentLyric.play();
          });

          // this.scroll.scrollToElement();
        }
        // 判断音乐播放
        if ((musicNoChange && playing) || (!musicNoChange && playing)) {
          this.$nextTick(function() {
            _this.$refs.audio.play();
          });
        } else if (!playing) {
          this.$nextTick(function() {
            _this.$refs.audio.pause();
          });
        } else {
          if (Object.keys(newval.currentMusic).length <= 0) {
            _this.$refs.audio.src = "";
          }
        }
      }
    },
    currentTime() {
      const _this = this;
      this.musicProgressValue =
        (Math.round(this.currentTime) / Math.round(this.durationTime)).toFixed(
          3
        ) * 100;
    }
  },
  computed: {
    startPlaying() {
      const { currentMusic, playing } = this;
      return {
        currentMusic,
        playing
      };
    },
    ...mapState([
      "playList",
      "fullPage",
      "playing",
      "mode",
      "sequenceList",
      "currentMusicID"
    ]),
    ...mapGetters(["currentMusic", "nextCurrentIndex", "prevCurrentIndex"])
  },
  methods: {
    test() {
      // console.log(this.$refs.lyricLine[0])
      // const _this =this;
      // this.scroll.scrollToElement(this.$refs.lyricLine,0);
    },
    play() {
      if (this.playing) {
        // this.$refs.audio.pause();
        this.SET_MUSIC_PLAYING(false);
      } else {
        // this.$refs.audio.play();
        this.SET_MUSIC_PLAYING(true);
      }
    },
    prev() {
      this.SET_NEW_MUSIC(this.prevCurrentIndex);
      this.SET_MUSIC_PLAYING(true);
    },
    next() {
      this.SET_NEW_MUSIC(this.nextCurrentIndex);
      this.SET_MUSIC_PLAYING(true);
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
    hideToast() {
      this.toast = false;
      if (this.toastTimer) clearTimeout(this.toastTimer);
    },
    musicEnd() {
      this.next();
    },
    close() {
      this.OPEN_MUSIC(false);
      this.SET_PAGE_FIXED(false);
    },
    getCurrentTime(e) {
      this.currentTime = e.target.currentTime;
    },
    musicReady() {
      this.durationTime = this.$refs.audio.duration;
    },
    format(value) {
      const interval = Math.floor(value);
      const minute = this._pad(Math.floor(interval / 60));
      const second = this._pad(Math.floor(interval % 60));
      return `${minute}:${second}`;
    },
    _pad(num, n = 2) {
      let len = num.toString().length;
      while (len < 2) {
        num = "0" + num;
        len++;
      }
      return num;
    },
    setProgress(val) {
      let newCurrentTime = this.durationTime * (val / 100);
      this.$refs.audio.currentTime = newCurrentTime;
    },
    setSequence(mode = this.mode, list = this.playList) {
      let newlist = list.slice(0);
      if (mode == 0 || mode == 1) {
        this.SET_MUSIC_SEQUENCE(newlist);
      } else if (mode == 2) {
        newlist.sort(function(a, b) {
          return Math.random() - 0.5;
        });
        console.log("打乱列表2");
        console.log(newlist);
        this.SET_MUSIC_SEQUENCE(newlist);
      }
    },
    openBottomSheet() {
      this.bottomSheet = true;
    },
    closeBottomSheet() {
      this.bottomSheet = false;
    },
    openComments() {
      this.comment = true;
    },
    closeComments() {
      this.comment = false;
    },
    handler({lineNum,txt}) {
      this.currentLineNum = lineNum;
      if (lineNum > 5) {
        let lineEl = this.$refs.lyricLine[lineNum - 5];
        this.scroll.scrollToElement(lineEl, 1000);
      } else {
        this.scroll.scrollToElement(0, 0, 1000);
      }
    },
    ...mapMutations([
      "OPEN_MUSIC",
      "SET_MUSIC_URL",
      "SET_MUSIC_PAUSE",
      "SET_MUSIC_PLAYING",
      "SET_MUSIC_CURRENTINDEX",
      "SET_MUSIC_PLAYMODE",
      "SET_MUSIC_SEQUENCE",
      "SET_PAGE_FIXED",
      "SET_NEW_MUSIC"
    ]),
    ...mapActions(["GET_MUSIC_URL"])
  },
  filters: {
    singerName(value) {
      const arr = [];
      if (value) {
        if (value.length >= 1) {
          value.map(m => {
            arr.push(m.name);
          });
        }
      }

      return arr.join("/");
    },
    musicName(value) {
      if (value && value.length > 0) {
        return `（${value.join("")}）`;
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      const content = this.$refs.content;
      this.scroll = new BScroll(content, {
        scrollY: true,
        click: true
      });
    });
  }
};
</script>
<style lang="scss">
.ncm-m-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: url(~assets/img/m-bg.png) no-repeat;
  background-size: auto 100%;
}
.music-header {
  border-bottom: 1px solid rgba(#ffffff, 0.4);
}
.ncm-music {
  flex: auto;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 999;
  .fullpage-music {
    display: flex;
    flex: auto;
    flex-direction: column;
  }
}
.music-wrap {
  overflow: hidden;
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .m-btns,
  .m-info-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(#fff, 0.4);
    .icon-bofang,
    .icon-zanting {
      @include font-dpr(46px);
    }
    .icon-kuaitui,
    .icon-kuaijin {
      @include font-dpr(25px);
    }
    .icon-danquxunhuan,
    .icon-xunhuan,
    .icon-suijibofang,
    .icon-mcaidan {
      @include font-dpr(20px);
    }
  }
  .m-info-btns {
    padding: 0 1.207729rem;
    margin-bottom: 0.402576rem;
    .icon-shoucang1,
    .icon-shoucang2,
    .icon-pinglun2,
    .icon-xiazai2,
    .icon-sandian1 {
      @include font-dpr(19px);
    }
  }
  .middle-wrap {
    display: flex;
    flex: auto;
    flex-direction: column;
    justify-content: space-between;
  }
  .disc-box {
    padding-top: 1.932367rem;
  }
  .disc-box,
  .lyrics-box {
    flex: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .lyrics-box {
    overflow: scroll;
    position: relative;
    margin: 1.449275rem 0;
    .lyric-text {
      color: #b2afa9;
      @include font-dpr(18px);
      margin-bottom: 0.563607rem;
      text-align: center;
    }
    .current-lyric {
      color: #ffffff;
    }
    .lyrics-wrap {
    }
  }
}
.music-box {
  width: 8.244767rem;
  height: 8.244767rem;
  margin: 0 auto;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 2.57649rem;
    height: 3.703704rem;
    top: -1.932367rem;
    left: 45%;
    background: url(~assets/img/needle.png) no-repeat;
    transform-origin: 0 0;
    transition: all 0.4s;
    z-index: 100;
  }
  .music-disc {
    width: 100%;
    height: 100%;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(~assets/img/disc.png);
    }
    .ablum-pic {
      position: absolute;
      top: 1.465378rem;
      left: 1.465378rem;
      width: 5.31401rem;
      height: 5.31401rem;
      img {
        width: 100%;
      }
    }
  }
}

.m-disc-pause {
  &::after {
    transform: rotateZ(-20deg);
  }
}

.music-handle-wrap {
  padding: 0 0.402576rem 0.68438rem;
  .m-progress {
    display: flex;
    align-items: center;
    margin-bottom: 0.805153rem;
    .m-play-time {
      color: rgba(#fff, 0.8);
    }
    .m-count-time {
      color: rgba(#fff, 0.4);
    }
    .m-progress-wrap {
      flex: auto;
      position: relative;
      margin: 0 0.362319rem;
      .pro-point {
        position: absolute;
        width: 0.37037rem;
        height: 0.37037rem;
        background: #ffffff;
        border-radius: 50%;
        z-index: 200;
        top: -0.161031rem;
        left: -0.161031rem;
        &::before {
          content: "";
          position: absolute;
          width: 0.096618rem;
          height: 0.096618rem;
          background: $baseColor;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .mu-slider {
        margin: 0;
        .mu-slider-fill {
          background: $baseColor;
        }
        .mu-slider-track {
          background: #454349;
        }
      }
      .mu-slider-thumb {
        width: 0.37037rem;
        height: 0.37037rem;
        background: #ffffff;
        &::before {
          content: "";
          position: absolute;
          width: 0.096618rem;
          height: 0.096618rem;
          background: $baseColor;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .mu-linear-progress {
      background: #454349;
      height: 0.048309rem;
    }
    .mu-linear-progress-determinate,
    .mu-linear-progress-indeterminate {
      background: $baseColor;
    }
  }
}

/* 唱片动画 */
.disc-rotate {
  animation: disc-animation 18s linear infinite;
}
.disc-pause {
  animation-play-state: paused;
}
@keyframes disc-animation {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

