<template>
  <div class="findmusic">
    <div class="header">
      <mcu-header>
        <span class="iconfont icon-huatong" slot="left"></span>
        <div class="input">
          <mInput></mInput>
        </div>
        <img src="~assets/img/music-playing.gif" alt="" slot="right" v-if="miniMusicPlaying">
        <img src="~assets/img/music-pause.jpg" alt="" slot="right" v-else-if="miniMusicPause">
      </mcu-header>
      <mNav></mNav>
    </div>
    <router-view></router-view>
  </div>

</template>
<script>
import mcuHeader from "utils/header/header";
import mInput from "utils/input/input";
import mNav from "@/components/music/nav";
import music from "./music/music";
import mv from "./mv/mv";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      swiperOption: {
        // autoHeight:true
      }
    };
  },
  components: {
    mcuHeader,
    mInput,
    mNav,
    music,
    mv
  },
  computed: {
    ...mapGetters(["miniMusicPlaying", "miniMusicPause"])
  }
};
</script>
<style lang="scss">
.findmusic {
  flex: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: $headerHeight + 0.966184rem;
  > .header {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 200;
    .input {
      width: 100%;
      padding: 0 1.256039rem;
    }
  }
  .findMusicSwipe {
    width: 100%;
    > .swiper-container {
      width: 100%;
    }
  }
}
</style>


