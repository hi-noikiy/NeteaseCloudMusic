<template>
  <div class="nav">
      <div class="item" v-for="(nav,index) in navs" :key="index">
          <template v-if="index == activeNavIndex">
                <span class="active">{{nav}}</span>
          </template>
          <template v-else>
              <span class="">{{nav}}</span>
          </template>
      </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            navs:['音乐',' 视频','电台'],
            activeNavIndex:'0'
        }
    }
}
</script>
<style lang="scss">
.nav{
    display: flex;
    height: ui2css(120);
    font-size: ui2css(42);
    .item{
        flex: 1;
        @include flexCenter;
    }
    .active{
        color: $baseColor;
    }
}
</style>

