<template>
    <div>
        <ncm-header>
            <i class="iconfont icon-you-copy" slot="left"></i>
            我的音乐
            <i class="iconfont icon-zhutu" slot="right"></i>
        </ncm-header>
        <div class="menu">
            <ncm-panel>
                <i class="iconfont icon-geshou" slot="pic"></i>
                <span slot="name">我的歌手</span>
                <span slot="count">127
                    <i class="iconfont icon-you"></i>
                </span>
            </ncm-panel>
            <ncm-panel>
                <i class="iconfont icon-diantai" slot="pic"></i>
                <span slot="name">我的电台</span>
                <span slot="count">127
                    <i class="iconfont icon-you"></i>
                </span>
            </ncm-panel>
        </div>
        <ncm-panel-title title="我创建的歌单">
            <ncm-panel>
                <i class="iconfont icon-diantai" slot="pic"></i>
                <span slot="name">我的电台</span>
                <span slot="count">127
                    <i class="iconfont icon-you"></i>
                </span>
            </ncm-panel>
        </ncm-panel-title>
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
    return {};
  },
  created() {
    /* 获取uid */
    const uid = this.ifHasUid();
    this.$axios.get(`/api/user/playlist?uid=${uid}`).then(res => {
      console.log(res);
    });
  }
};
</script>
