<template>
    <div class="music-list">
        <ncm-header>
          <i class="iconfont icon-you-copy" slot="left"></i>
          歌单
          <i class="iconfont icon-gengduo" slot="right"></i>
          <i class="iconfont icon-zhutu" slot="right"></i>
        </ncm-header>
        <div class="list-info">
            <img :src="musicSheetInfo.picUrl" alt="" class='blur-bg blur'>
            <div class="list-head">
                <div class="info">
                    <div class="cover"><img :src="musicSheetInfo.picUrl" alt=""></div>
                    <div class="at">
                        <div class="title">{{musicSheetInfo.name}}</div>
                        <div class="author" v-if="musicSheetInfo.creator">
                          <img :src="musicSheetInfo.creator.avatarUrl" alt="" class="ava">
                          {{musicSheetInfo.creator.nickname}} <i class="iconfont icon-you"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btns">
                <div class="btn"><i class="iconfont icon-tianjiawenjian"></i><span class="num">36385</span></div>
                <div class="btn"><i class="iconfont icon-pinglun"></i><span class="num">475</span></div>
                <div class="btn"><i class="iconfont icon-zhuanfa"></i><span class="num">213</span></div>            
                <div class="btn"><i class="iconfont icon-xiazai"></i><span class="num">下载</span></div>
            </div>
        </div>
    </div>
</template>
<script>
import ncmHeader from "utils/header/header";
export default {
  data() {
    return {
      musicSheetInfo: {}
    };
  },
  created() {
    var _this = this;

    // var musicSheetInfo = { picUrl: picUrl};
    /*  获取歌单信息 */
    this.$axios
      .get(`/api/playlist/detail?id=${_this.$route.params.musicListId}`)
      .then(res => {
        // console.log(res);
        res = res.data.playlist;
        console.log(res);
        this.musicSheetInfo = _this._pick(res, [
          "id",
          "picUrl",
          "description",
          "name",
          "playCount",
          "shareCount",
          "subscribedCount",
          "trackCount",
          "tags",
          "tracks",
          "commentCount",
          "creator"
        ]);
        console.log(this.musicSheetInfo);
      });
  },
  components: {
    ncmHeader
  }
};
</script>

<style lang="scss">
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
        margin-bottom: .531401rem;
      }
      .author {
        @include flexCenterH;
        @include font-dpr(12px);
        color: rgba(#ffffff, 0.6);
        .ava{
          width: .724638rem;
          height: .724638rem;
          overflow: hidden;
          border-radius: 50%;
          margin-right: .128824rem;
        }
        .iconfont{
          margin-left: .305958rem;
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
    }
    .iconfont {
      @include font-dpr(18px);
    }
    .num {
      opacity: 0.4;
    }
  }
}
</style>
