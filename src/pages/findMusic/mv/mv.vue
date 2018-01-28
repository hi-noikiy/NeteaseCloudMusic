<template>
    <div class="video-list">
        <div class="video-box">
            <videoBox :op="op"></videoBox>
        </div>
        <div class="video-box">
            <videoBox :op="video" v-for="(video,index) in videoOps" :key="index"></videoBox>
        </div>
    </div>
</template>
<script>
import videoBox from "utils/videoBox/videoBox";
export default {
  data() {
    return {
      videoOps: [],
      op: {
        height: "360",
        //   playbackRates: [0.7, 1, 1.3, 1.5, 1.7],
        sources: [
          {
            type: "video/mp4",
            src: "http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_L"
          }
        ],
        poster:
          "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-3.jpg"
      }
    };
  },
  created() {
    var _this = this;
    /* 获取mv全部id */
    this.$axios.get("api/mv/first?limit=10").then(res => {
      console.log(res.data.data);
      var videoIdList = res.data.data.map(v => v.id);
      console.log(videoIdList);
      videoIdList.map(v => {
        /*  获取id对应mv视频 */
        _this.$axios.get("api/mv?mvid=" + v).then(res => {
          console.log(res);
          res = res.data.data;
          let videoOp = {};
          videoOp.sources = [];
          for (const key in res.brs) {
            if (res.brs.hasOwnProperty(key)) {
              const element = res.brs[key];
              let source = {};
              source.type = "video/mp4";
              // console.log(element)
              // let ele = element.replace(/.mp4$/,"");
              // console.log(ele)
              source.src = element;
              videoOp.sources.push(source);
            }
          }
          videoOp.poster = res.cover;
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
