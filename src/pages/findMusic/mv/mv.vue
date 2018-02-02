<template>
    <div class="video-list">
        <videoBox :op="video"  v-for="(video,index) in videoOps" :key="index"></videoBox>
    </div>
</template>
<script>
import videoBox from "utils/videoBox/videoBox";
export default {
  data() {
    return {
      videoOps: [],
      firstLoadLimitNum: 3,         /* 首次加载mv数量 */
    };
  },
  created() {
    var _this = this;
    /* 获取mv全部id */
    this.$axios
      .get(`/api/mv/first?limit=${_this.firstLoadLimitNum}`)
      .then(res => {
        // console.log(res.data.data);
        res= res.data.data;
        var videoIdList = res.map(v => v.id);
        // console.log(videoIdList);
        videoIdList.map(v => {
          /*  获取id对应mv视频 */
          _this.$axios.get("/api/mv?mvid=" + v).then(res => {
            console.log(res);
            res = res.data.data;
            let videoOp = {};
            videoOp.sources = [];
            // for (const key in res.brs) {
            //   if (res.brs.hasOwnProperty(key)) {
            //     const element = res.brs[key];
            //     let source = {};
            //     source.type = "video/mp4";
            //     source.src = `http://${_this.apiUrl}/mv/url?url=${element}`;
            //     console.log(source.src)
            //     videoOp.sources.push(source);
            //   }
            // }
            let source = {};
            source.type = "video/mp4";
            source.src = `http://${_this.apiUrl}/mv/url?url=${res.brs[240]}`;
            videoOp.sources.push(source);
            videoOp.poster = res.cover;
            /* 传入mv配置 */
            this.videoOps.push(videoOp);
          });
        });
      });
  },
  components: {
    videoBox
  }
};
</script>
<style lang="scss">
.video-list {
  flex: auto;
}
</style>
