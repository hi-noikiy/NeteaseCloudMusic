<template>
    <div>
        <ncm-header>
            <i class="iconfont icon-you-copy" slot="left"></i>
            我的音乐
            <i class="iconfont icon-zhutu" slot="right"></i>
        </ncm-header>
        <template>
            <div class="menu">
                <ncm-panel>
                    <i class="iconfont icon-diantai" slot="pic"></i>
                    <span slot="name">我的电台</span>
                    <span slot="count">127
                        <i class="iconfont icon-you"></i>
                    </span>
                </ncm-panel>
            </div>
            <ncm-panel-title title="我创建的歌单" :count="creatlist.length">
                <ncm-panel v-for="(item,index) in creatlist" :key="index" :listId='item.id'>
                    <img :src="item.coverImgUrl" alt="" slot="pic">
                    <span slot="name">{{item.name}}</span>
                    <span slot="listnum">{{item.trackCount}}首</span>
                </ncm-panel>
            </ncm-panel-title>
            <ncm-panel-title title="我收藏的歌单" :count='collection.length'>
                <ncm-panel v-for="(item,index) in collection" :key="index" :listId='item.id'>
                    <img :src="item.coverImgUrl" alt="" slot="pic">
                    <span slot="name">{{item.name}}</span>
                    <span slot="listnum">{{item.trackCount}}首</span>
                </ncm-panel>
            </ncm-panel-title>
        </template>
    </div>
</template>
<script>
import ncmHeader from "utils/header/header";
import ncmPanel from "base/panel/panel";
import ncmPanelTitle from "base/panel/panel-title";
export default {
  components: {
    ncmHeader,
    ncmPanel,
    ncmPanelTitle
  },
  data() {
    return {
      creatlist: [],
      collection: []
    };
  },
  created() {
    /* 获取uid */
    const _this = this;
    const uid = this.ifHasUid();
    if (uid) {
      this.$axios.get(`/api/user/subcount`).then(res => {
        console.log(res);
      });
    }

    this.$axios.get(`/api/user/playlist?uid=${uid}`).then(res => {
      console.log(res);
      res = res.data.playlist;
      res.map(m => {
        if (m.subscribed === false) {
          _this.creatlist.push(m);
        } else {
          _this.collection.push(m);
        }
      });
    });
  }
};
</script>
