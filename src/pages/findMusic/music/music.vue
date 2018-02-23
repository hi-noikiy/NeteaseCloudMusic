<template>
  <div>
    <!--  banner -->
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in banner" :key="index">
        <img :src='item.pic' alt="" class="banner">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <smallTopic title="推荐歌单" class="smallTopic"></smallTopic>
    <music-sheet :musicList="musicSheet"></music-sheet>
  </div>
</template>
<script>
import smallTopic from "utils/smallTopic/topic";
import musicSheet from "utils/musicSheet/musicSheet";
export default {
  data() {
    return {
      banner: [],
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        height: 161,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      musicSheet: []
    };
  },
  components: {
    smallTopic,
    musicSheet
  },
  created() {
    /* 获取banner */
    this.$axios.get("/api/banner").then(res => {
      // console.log(res.data.banners);
      this.banner = res.data.banners;
    });
    /* 获取推荐歌单id */
    this.$axios.get("/api/personalized").then(res => {
      console.log(res);
      this.musicSheet = res.data.result;
      this.musicSheet = this.musicSheet.slice(0, 6);
    });
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>
<style lang="scss">
.swiper-container {
  margin-bottom: .362319rem /* 45/124.2 */;
  .banner {
    width: 100%;
  }
}
.smallTopic {
  margin-bottom: .362319rem /* 45/124.2 */;
}
</style>
