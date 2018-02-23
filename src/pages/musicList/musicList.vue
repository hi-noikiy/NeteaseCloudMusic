<template>
  <transitionRightToLeft>
    <div class="music-list-wrap">
      <ncm-header>
        <i class="iconfont icon-you-copy" slot="left" @click="back"></i>
        歌单
        <!-- <i class="iconfont icon-gengduo" slot="right"></i> -->
        <img src="~assets/img/music-playing.gif" alt="" slot="right" v-if="miniMusicPlaying" @click="open_music">
        <img src="~assets/img/music-pause.png" alt="" slot="right" v-else-if="miniMusicPause" @click="open_music">
      </ncm-header>
      <div class="music-list">
        <div class="list-info">
          <img :src="musicSheetInfo.coverImgUrl" alt="" class='blur-bg blur'>
          <div class="list-head">
            <div class="info">
              <div class="cover"><img :src="musicSheetInfo.coverImgUrl" alt=""></div>
              <div class="at">
                <div class="title">{{musicSheetInfo.name}}</div>
                <div class="author" v-if="musicSheetInfo.creator">
                  <img :src="musicSheetInfo.creator.avatarUrl" alt="" class="ava"> {{musicSheetInfo.creator.nickname}}
                  <i class="iconfont icon-you"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="btns">
            <div class="btn">
              <i class="iconfont icon-tianjiawenjian"></i>
              <span class="num">{{musicSheetInfo.subscribedCount}}</span>
            </div>
            <div class="btn">
              <i class="iconfont icon-pinglun"></i>
              <span class="num">{{musicSheetInfo.commentCount}}</span>
            </div>
            <div class="btn">
              <i class="iconfont icon-zhuanfa"></i>
              <span class="num">{{musicSheetInfo.shareCount}}</span>
            </div>
            <div class="btn">
              <i class="iconfont icon-xiazai"></i>
              <span class="num">下载</span>
            </div>
          </div>
        </div>
        <msDetail :count="musicSheetInfo.trackCount">
          <msDetailItem v-for="(music,index) in tracks" :key="index" :musicInfo=music :index=index :musicListId=musicSheetInfo.id @setListInfo='setListInfo(tracks)'>
          </msDetailItem>
          <ncm-loading v-show='!tracks.length'></ncm-loading>
        </msDetail>
      </div>
    </div>
  </transitionRightToLeft>
</template>
<script>
import ncmHeader from "utils/header/header";
import msDetail from "utils/musicSheetDetail/msDetail";
import msDetailItem from "utils/musicSheetDetail/msDetailItem";
import ncmLoading from "@/components/base/loading/loading";

import transitionRightToLeft from "base/transition/rightToLeft";
import { mapMutations,mapGetters } from "vuex";
export default {
  data() {
    return {
      musicSheetInfo: {},
      tracks: []
    };
  },
  created() {
    var _this = this;
    // console.log(_this.$route.params.musicListId);
    /*  获取歌单信息 */
    this.$axios
      .get("/api/playlist/detail?id=" + _this.$route.params.musicListId)
      .then(res => {
        // console.log(res);
        res = res.data.result;
        // console.log("歌单信息:");
        // console.log(res);
        /* 歌单信息 */
        _this.musicSheetInfo = _this._pick(res, [
          "id",
          "coverImgUrl",
          "description",
          "name",
          "playCount",
          "shareCount",
          "subscribedCount",
          "trackCount",
          "tags",
          "commentCount",
          "creator"
        ]);
        /* 歌单全部歌曲信息 */
        _this.tracks = res.tracks;
        let ids = [];
        res.tracks.map(m => {
          ids.push(m.id);
        });
        ids = ids.join(",");
        return this.$axios.get(`/api/music/url?id=${ids}`);
      })
      .then(res => {
        res.data.data.map((item, index) => {
          _this.tracks.map((m, i) => {
            if (item.id == m.id) {
              Object.assign(m, {
                url: item.url
              });
            }
          });
        });
        console.log(_this.tracks);
      });
  },
  components: {
    ncmHeader,
    msDetail,
    msDetailItem,
    ncmLoading,
    transitionRightToLeft
  },
  methods: {
    setListInfo(list) {
      // console.log(list)
      this.SET_MUSIC_SEQUENCE(list);
    },
    back() {
      this.$router.go(-1);
    },
    open_music(){
      this.OPEN_MUSIC();
    },
    ...mapMutations(["SET_MUSIC_SEQUENCE","OPEN_MUSIC"])
  },
  computed: {
    ...mapGetters(["miniMusicPlaying","miniMusicPause"])
  }
};
</script>

<style lang="scss">
.music-list-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 300;
}
.music-list {
  .list-info {
    position: relative;
    .blur-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -10;
    }
  }
  .list-head {
    .info {
      display: flex;
      padding: 0.362319rem;
    }
    .cover {
      flex: none;
      width: 3.381643rem;
      height: 3.381643rem;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .at {
      padding: 0.41868rem 0.644122rem 0 0.442834rem;
      flex: auto;
      .title {
        @include font-dpr(16px);
        line-height: 1.414;
        color: #ffffff;
        margin-bottom: 0.531401rem;
      }
      .author {
        @include flexCenterH;
        @include font-dpr(12px);
        color: rgba(#ffffff, 0.6);
        .ava {
          width: 0.724638rem;
          height: 0.724638rem;
          overflow: hidden;
          border-radius: 50%;
          margin-right: 0.128824rem;
        }
        .iconfont {
          margin-left: 0.305958rem;
        }
      }
    }
  }
  .btns {
    display: flex;
    .btn {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      color: #ffffff;
      height: 1.36876rem;
      padding: .128824rem /* 16/124.2 */ 0;
    }
    .iconfont {
      @include font-dpr(18px);
    }
    .num {
      opacity: 0.8;
    }
  }
}
</style>
