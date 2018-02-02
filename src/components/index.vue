<template>
  <div>
      <router-view/>
      <ncm-tabbar></ncm-tabbar>
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
