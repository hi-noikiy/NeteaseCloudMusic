<template>
  <div class="ncm-bottom-item" :class="{'playing':playing}" @click="playMusic">
    <div class="musicname">
      <i class="iconfont icon-lababofang" v-if="playing"></i>
      <div class="name">{{music.name}}
        <span class="artname">- {{art(music.artists)}}</span>
      </div>
    </div>
    <div class="delete" @click.stop="deleteMusic(music.id)">
      <i class="iconfont icon-iconfontcha"></i>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  created() {},
  props: ["music"],
  computed: {
    playing() {
      return this.currentMusic.id == this.music.id ? true : false;
    },
    ...mapGetters(["currentMusic", "nextCurrentIndex"]),
    ...mapState(["currentMusicID"])
  },
  methods: {
    art(val) {
      let arr = [];
      val.map(m => {
        arr.push(m.name);
      });
      return arr.join("/");
    },
    playMusic() {
      const _this = this;
      this.SET_MUSIC_CURRENTID(_this.music.id);
      this.SET_MUSIC_PLAYING(true);
    },
    deleteMusic(id) {
      if (this.music.id == this.currentMusicID) {
        this.SET_NEW_MUSIC(this.nextCurrentIndex);
        this.SET_MUSIC_PLAYING(true);
      }
      this.DELETE_MUSIC(id);
    },
    ...mapMutations(["DELETE_MUSIC", "SET_NEW_MUSIC", "SET_MUSIC_PLAYING","SET_MUSIC_CURRENTID"])
  }
};
</script>
<style lang="scss" scoped>
.ncm-bottom-item {
  display: flex;
  height: 1.062802rem;
  border-bottom: 1px solid #d5c7be;
  .musicname {
    display: flex;
    flex: auto;
    align-items: center;
    @include font-dpr(14px);
    @include text-overflow();
    & > .iconfont {
      margin-right: 0.193237rem;
    }
    .name {
      display: flex;
      align-items: center;
    }
    .artname {
      @include font-dpr(10px);
      color: #555454;
      margin-left: 0.112721rem;
    }
  }
  .delete {
    display: flex;
    align-items: center;
    .iconfont {
      margin: 0 0.362319rem;
      @include font-dpr(12px);
    }
  }
}
.ncm-bottom-item.playing {
  .musicname {
    color: $baseColor;
  }
  .artname {
    color: $baseColor;
  }
}
</style>
