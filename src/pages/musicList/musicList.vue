<template>
    <div class="music-list">
        <div class="list-head">
            <ncm-header>
                <i class="iconfont icon-you-copy" slot="left"></i>
                歌单
                <i class="iconfont icon-gengduo" slot="right"></i>
                <i class="iconfont icon-zhutu" slot="right"></i>
            </ncm-header>
            <div class="info">
                <div class="cover"><img src="" alt=""></div>
                <div class="at">
                    <div class="title">爱情不卑微不施舍，别以为你是谁</div>
                    <div class="author"></div>
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
    // var musicSheetInfo = { picUrl: picUrl };
    /*  获取歌单信息 */
    this.$axios
      .get(`/api/playlist/detail?id=${_this.$route.params.musicListId}`)
      .then(res => {
        console.log(res);
        res = res.data.playlist;
        console.log(res);
        // this.musicSheetInfo = res;
        // console.log(this.musicSheetInfo);
      });
  },
  components: {
    ncmHeader
  }
};
</script>

<style lang="scss">
.music-list {
  .list-head {
    .info {
      display: flex;
      padding: 0.362319rem;
    }
    .cover {
      flex: none;
      width: 3.381643rem;
      height: 3.381643rem;
    }
    .at {
      padding-left: 0.402576rem;
      flex: auto;
      .title {
        @include font-dpr(16px);
      }
      .author {
        @include font-dpr(10px);
      }
    }
  }
  .btns {
    display: flex;
    .btn {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .iconfont {
      @include font-dpr(18px);
    }
  }
}
</style>
