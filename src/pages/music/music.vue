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
        <div class="music-box   m-disc-pause">
          <div class="music-disc">
            <div class="ablum-pic">
              <template v-if="currentMusic.album"><img :src="currentMusic.album.picUrl" alt=""></template>
            </div>
          </div>
        </div>
        <div class="music-handle-wrap">
          <div class="m-progress">
            <span class="m-play-time">{{format(currentTime)}}</span>
            <div class="m-progress-wrap">
              <!-- <div class="pro-point"></div>
            <mu-linear-progress mode="determinate" :value="musicProgressValue" /> -->
              <mu-slider v-model="musicProgressValue" class="demo-slider" />
            </div>
            <span class="m-count-time">{{format(durationTime)}}</span>
          </div>
          <div class="m-btns">
            <i class="iconfont icon-xunhuan"></i>
            <i class="iconfont icon-forward2-copy"></i>
            <i class="iconfont" :class="{'icon-bofang':!playing,'icon-zanting':playing}" @click="play"></i>
            <i class="iconfont icon-forward2"></i>
            <i class="iconfont icon-liebiao1"></i>
          </div>
        </div>
        <!-- 音频 -->
        <audio :src="currentMusic.url" ref="audio" @timeupdate='getCurrentTime'></audio>

      </div>
    </div>
    <!-- </div> -->
  </transitionRightToLeft>

</template>
<script>
import ncmHeader from "utils/header/header";
import transitionRightToLeft from "base/transition/rightToLeft";

import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      musicId: "",
      musicInfo: {
        picUrl: ""
      },
      currentTime: 0,
      durationTime: 0,
      musicProgressValue: 0
    };
  },
  created() {
    const _this = this;
    // console.log(this.$route.params);
    // const musicId = this.$route.params.musicId;
    console.log(this.playList);
    if (_this.musicId == "") return;
    this.$axios
      .get(`/api/song/detail?ids=${_this.musicId}`)
      .then(res => {
        // console.log(res);
        Object.assign(_this.musicInfo, res.data.songs[0]);
        // console.log(_this.musicInfo);
        return _this.$axios.get(`/api/album?id=${res.data.songs[0].al.id}`);
      })
      .then(res => {
        // console.log(res);
        res = res.data;
        _this.musicInfo.picUrl = res.album.picUrl;
      });
    /*获取音乐url*/
    this.$axios.get(`/api/music/url?id=${_this.musicId}`).then(res => {
      console.log(res);
      res.data;
    });
  },
  components: {
    ncmHeader,
    transitionRightToLeft
  },
  filters: {
    musicName(value) {
      if (value && value.length > 0) {
        return `（${value.join("")}）`;
      }
    }
  },
  watch: {
    currentMusic: {
      deep: true,
      handler: function() {
        const _this = this;
        this.$nextTick(function() {
          _this.$refs.audio.play();
        });
      }
    },
    musicProgressValue(newval){

    }
  },
  computed: {
    musicPercent() {
      return (
        (Math.round(this.currentTime) / Math.round(this.durationTime)).toFixed(
          3
        ) * 100
      );
    },
    ...mapState(["playList", "fullPage", "playing"]),
    ...mapGetters({
      currentMusic: "currentMusic"
    })
  },
  methods: {
    play() {
      if (this.playing) {
        this.$refs.audio.pause();
        this.SET_MUSIC_PAUSE();
      } else {
        this.$refs.audio.play();
        this.SET_MUSIC_PLAYING();
      }
    },
    close() {
      this.CLOSE_MUSIC();
    },
    getCurrentTime(e) {
      this.currentTime = e.target.currentTime;
      this.durationTime = this.$refs.audio.duration;
    },
    format(value) {
      const interval = Math.round(value);
      const minute = this._pad(Math.round(interval / 60));
      const second = this._pad(Math.round(interval % 60));
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
    ...mapMutations([
      "CLOSE_MUSIC",
      "SET_MUSIC_URL",
      "SET_MUSIC_PAUSE",
      "SET_MUSIC_PLAYING"
    ]),
    ...mapActions(["GET_MUSIC_URL"])
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
  padding-top: 1.932367rem;
  overflow: hidden;
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  .m-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(#fff, 0.4);
    @include font-dpr(46px);
  }
}
</style>

