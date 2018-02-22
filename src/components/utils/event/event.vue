<template>
    <div class="event-box">
        <div class="e-header">
            <div class="e-avatar"><img :src="eventInfo.user.avatarUrl" alt=""></div>
            <div class="e-title">
                <div class="e-topic">
                    <div>
                        <span class="e-user">{{eventInfo.user.nickname}}</span>
                        <span>发布视频:</span>
                    </div>
                    <div class="follow">+关注</div>
                </div>
                <div class="e-date">最近</div>
            </div>
        </div>
        <div class="e-content">
            <div class="e-text">{{eventJson.msg}}</div>
            <div class="e-media"></div>
            <div class="e-handle">
                <span>
                    <i class="iconfont icon-dianzan"></i>21</span>
                <span>
                    <i class="iconfont icon-pinglun"></i>8</span>
                <span>
                    <i class="iconfont icon-zhuanfa"></i>2</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      eventJson: {}
    };
  },
  props: ["eventInfo"],
  created() {
    this.eventJson = JSON.parse(this.eventInfo.json);
  }
};
</script>
<style lang="scss">
.event-box {
  padding: 0.483092rem 0.241546rem;
  border-bottom: 2px solid #e1e2e3;
  .e-header {
    display: flex;
    margin-bottom: 0.322061rem;
    .e-avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      margin-right: 0.161031rem;
      img {
        width: 0.966184rem;
        height: 0.966184rem;
        border-radius: 50%;
      }
    }
    .e-title {
      flex: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .e-date {
      color: #979798;
      @include font-dpr(10px);
      margin-top: 0.120773rem;
    }
    .e-topic {
      display: flex;
      justify-content: space-between;
      @include font-dpr(13px);
      color: $baseFontColor;
      .follow {
          color:$baseColor;
      }
      .e-user {
        color: #5a7cab;
      }
    }
  }
  .e-content {
    padding-left: 1.127214rem;
    .e-text {
      @include font-dpr(14px);
      color: $baseFontColor;
      line-height: 1.4;
    }
    .e-media {
      width: 5.152979rem;
      height: 2.898551rem;
    }
    .e-handle {
      display: flex;
      justify-content: space-between;
      @include font-dpr(9px);
      color: #979798;
      .iconfont {
        @include font-dpr(15px);
        color: $baseFontColor;
        margin-right: 0.128824rem;
      }
    }
  }
}
</style>
