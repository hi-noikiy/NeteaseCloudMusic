<template>
  <!-- <router-link :to="`/music/${musicInfo.id}`"> -->
  <div class="music-item" :class="{playing}" @click="playMusic">
    <div class="index">
      <i class="iconfont icon-lababofang" v-if="playing"></i>
      <template v-else>{{sequenceIndx}} </template>
    </div>
    <div class="music-info">
      <div class="name">
        <div class="mname">
          {{musicInfo.name}}
          <span v-if="musicInfo.alias.length >0" class="alias">
            （
            <template v-for="alias in musicInfo.alias">{{alias}}</template>）
          </span>
        </div>
        <div class="aname">
          {{musicInfo.artists | singerName}} - {{musicInfo.album.name}}
        </div>
      </div>
      <div class="handle">
        <span v-if="!musicInfo.mvid == 0">
          <i class="iconfont icon-shipin"></i>
        </span>
        <span>
          <i class="iconfont icon-gengduo"></i>
        </span>
      </div>
    </div>
  </div>
  <!-- </router-link> -->
</template>
<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  props: ["musicInfo", "index", "musicListId"],
  created() {},
  methods: {
    playMusic() {
      this.SET_MUSIC_CURRENTINDEX(this.index);      
      this.$emit("setListInfo");
      this.OPEN_MUSIC();
      this.SET_PAGE_FIXED(true);
      this.SET_MUSIC_PLAYING();
    },
    ...mapMutations([
      "OPEN_MUSIC",
      "SET_MUSIC_PLAYLIST",
      "SET_MUSIC_CURRENTINDEX",
      "SET_MUSIC_PLAYING",
      "SET_PAGE_FIXED"
    ])
  },
  computed: {
    sequenceIndx() {
      return this.index + 1;
    },
    playing() {
      return this.musicInfo.id == this.currentMusic.id;
    },
    ...mapGetters(["currentMusic"])
  },
  filters: {
    singerName(value) {
      const arr = [];
      if (value) {
        if (value.length >= 1) {
          value.map(m => {
            arr.push(m.name);
          });
        }
      }

      return arr.join("/");
    }
  }
};
</script>
<style lang="scss">
.music-item {
  display: flex;
  height: 1.320451rem;
  .index {
    display: flex;
    flex: none;
    width: 1.014493rem;
    justify-content: center;
    align-items: center;
    @include font-dpr(12px);
    color: #979798;
  }
  .music-info {
    flex: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e2e2e3;
    .name {
      width: 6.924316rem;
      flex: none;
    }
    .mname {
      @include font-dpr(16px);
      @include text-overflow();
      margin-bottom: 0.144928rem;
      .alias {
        color: #979798;
      }
    }
    .aname {
      @include font-dpr(12px);
      @include text-overflow();
      color: #7d7d7e;
    }
    .iconfont {
      @include font-dpr(16px);
      color: #7d7d7e;
    }
    .handle {
      flex: none;
      span {
        padding: 0 0.241546rem;
      }
    }
  }
}
.playing {
  .index {
    @include font-dpr(18px);
    color: $baseColor;
  }
  .mname {
    color: $baseColor;
  }
}
</style>
