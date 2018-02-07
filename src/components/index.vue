<template>
  <div>
      <router-view/>
      <!-- <ncm-tabbar></ncm-tabbar> -->
      <!-- <router-view name="tabbar"></router-view> -->
  </div>
</template>
<script>
import ncmTabbar from "utils/tabbar/tabbar";
export default {
  components: {
      ncmTabbar
  }
}
</script>
