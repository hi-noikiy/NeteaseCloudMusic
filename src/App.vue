<template>
  <div class="main" id="#app">
    <router-view/>
    <router-view name="tabbar"></router-view>
    <player v-show="fullPage"></player>
  </div>
</template>

<script>
import player from "pages/music/music";
import tabbar from "utils/tabbar/tabbar";
import {mapState} from "vuex";
export default {
  name: "App",
  components: {
    player
  },
  computed: {
    ...mapState([
      'fullPage'
    ])
  }
};
</script>

<style lang='scss'>
.main {
  display: flex;
  flex: auto;
  flex-direction: column;
}
</style>
