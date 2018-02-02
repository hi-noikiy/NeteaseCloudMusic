<template>
    <div class="main" id="#app">
      <router-view/>
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
  @include flexColumn;
}
</style>
