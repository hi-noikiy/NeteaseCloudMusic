<template>
    <div>
        <search></search>
        <mNav></mNav>
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
        <musicList :musicList="musicSheet"></musicList>
    </div>
</template>
<script>
import search from "@/components/music/search";
import mNav from "@/components/music/nav";
import smallTopic from "utils/smallTopic/topic";
import musicList from "utils/musicList/musicList"
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
      musicSheet:[]
    };
  },
  components: {
    search,
    mNav,
    smallTopic,
    musicList
  },
  created() {
    this.$axios.get("api/banner").then(res => {
    //   console.log(res.data.banners);
      this.banner = res.data.banners;
    });
    this.$axios.get("api/personalized").then(res=>{
        console.log(res.data.result);
        this.musicSheet = res.data.result;
        this.musicSheet.map(m=>{
            console.log(m.picUrl)
        })
    })
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
    margin-bottom: ui2css(51);
  .banner {
    width: 100%;
  }
}
.smallTopic{
    margin-bottom: ui2css(45)
}
</style>
