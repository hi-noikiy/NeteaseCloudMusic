<template>
    <div class="event">
        <ncm-header>
            <i class="iconfont icon-you-copy" slot="left"></i>
            动态
            <i class="iconfont icon-zhutu" slot="right"></i>
        </ncm-header>
        <div class="events">
            <event v-for="(event,index) in events" :key="index" :eventInfo='event'></event>
        </div>
    </div>
</template>
<script>
import ncmHeader from "utils/header/header";
import event from "utils/event/event";
export default {
  data() {
    return {
      events: []
    };
  },
  created() {
    const _this = this;
    this.$axios.get(`/api/event`).then(res => {
      console.log(res);
      _this.events = res.data.event;
    });
  },
  components: {
    ncmHeader,
    event
  }
};
</script>
<style lang="scss">

</style>

