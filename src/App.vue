<template>
  <div class="main" id="#app">
    <router-view/>
    <router-view name="tabbar"></router-view>

  </div>
</template>

<script>
import findMusic from "@/pages/findMusic/findMusic";
import tabbar from "utils/tabbar/tabbar";
export default {
  name: "App",
  components: {
    findMusic
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
