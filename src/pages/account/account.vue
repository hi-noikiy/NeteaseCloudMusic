<template>
  <div class="account">
    <mcu-header>账号</mcu-header>
    <div class="content">
      <div class="not-login" v-if="!isLogin">
        <div class="text">
          登录网易音乐<br/> 手机电脑多端同步，320k高音质无限下载
        </div>
        <router-link to="login">
          <mt-button type="default" size="large" @click="openLogin()">立即登录</mt-button>
        </router-link>
      </div>
      <div class="login" v-else>
        <div class="login-header">
          <div class="person-info">
            <div class="info-box">
              <div class="avatar">
                <template v-if="mineInfo.profile"><img :src="mineInfo.profile.avatarUrl" alt=""></template>
              </div>
              <div class="info">
                <div class="username">
                  <template v-if="mineInfo.profile">{{mineInfo.profile.nickname}}</template>
                </div>
                <div class="level">LV.{{mineInfo.level}}</div>
              </div>
            </div>
            <div class="qiandao">
              <span>签到
                <i class="iconfont icon-you"></i>
              </span>
            </div>
          </div>
          <div class="info-btns">
            <div class="info-btn">
              <span>动态</span>
              <i>
                <template v-if="mineInfo.profile">{{mineInfo.profile.eventCount}}</template>
              </i>
            </div>
            <div class="info-btn">
              <span>关注</span>
              <i>
                <template v-if="mineInfo.profile">{{mineInfo.profile.follows}}</template>
              </i>
            </div>
            <div class="info-btn">
              <span>粉丝</span>
              <i>
                <template v-if="mineInfo.profile">{{mineInfo.profile.followeds}}</template>
              </i>
            </div>
            <div class="info-btn">
              <span class="iconfont icon-bi"></span>
              <i>我的资料</i>
            </div>
          </div>
        </div>
        <ncm-cell remind='4'>
          <i class="iconfont icon-xinxi" slot="icon"></i>
          <span slot="title">我的信息</span>
        </ncm-cell>
        <ncm-cell-group>
          <ncm-cell>
            <i class="iconfont icon-vip" slot="icon"></i>
            <span slot="title">VIP会员</span>
          </ncm-cell>
          <ncm-cell>
            <i class="iconfont icon-shangcheng" slot="icon"></i>
            <span slot="title">商城</span>
          </ncm-cell>
        </ncm-cell-group>
        <ncm-cell-group>
          <ncm-cell>
            <i class="iconfont icon-saoyisao" slot="icon"></i>
            <span slot="title">扫一扫</span>
          </ncm-cell>
          <ncm-cell>
            <i class="iconfont icon-pifu" slot="icon"></i>
            <span slot="title">个性换肤</span>
          </ncm-cell>
          <ncm-cell>
            <i class="iconfont icon-dengpao" slot="icon"></i>
            <span slot="title">夜间模式</span>
          </ncm-cell>
        </ncm-cell-group>
      </div>

    </div>
  </div>
</template>
<script>
import mcuHeader from "utils/header/header";
import login from "pages/login/login";
import ncmCell from "utils/cell/cell";
import ncmCellGroup from "utils/cell/cell-group";
export default {
  data() {
    return {
      isLogin: false,
      mineInfo: {},
      fansNum: 0
    };
  },
  components: {
    mcuHeader,
    login,
    ncmCell,
    ncmCellGroup
  },
  methods: {
    openLogin() {
      this.isLogin = !this.isLogin;
    }
  },
  created() {
    const _this = this;
    const uid = this.ifHasUid();
    this.isLogin = uid ? true : false;

    this.$axios.get(`/api/user/detail?uid=${uid}`).then(res => {
      console.log(res);
      _this.mineInfo = res.data;
    });

    this.$axios.get(`/api/user/followeds?uid=${uid}`).then(res => {
      console.log(res);
      _this.fansNum = res.data;
    });

    this.$axios.get(`/api/user/event?uid=${uid}`).then(res => {
      console.log(res);
    });
  }
};
</script>
<style lang="scss">
.account {
  display: flex;
  flex: auto;
  flex-direction: column;
  .content {
    display: flex;
    flex: auto;
    flex-direction: column;
    background: $baseBgPrey;
    .not-login {
      padding: 0.434783rem 0.241546rem 0;
      text-align: center;
      @include font-dpr(14px);
      height: 3.478261rem;
      background: #ffffff;
      .text {
        line-height: 0.603865rem;
        margin-bottom: 0.241546rem;
      }
    }
    .login {
      .person-info {
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 2.254428rem;
        padding: 0 0.241546rem 0 0.362319rem;
        border-bottom: 1px solid #e2e2e3;
        .info-box {
          display: flex;
        }
        .avatar {
          width: 1.449275rem;
          height: 1.449275rem;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 0.257649rem;
          img {
            width: 100%;
          }
        }
        .info {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        .username {
          @include font-dpr(16px);
          color: $baseFontColor;
        }
        .level {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 0.845411rem;
          height: 0.386473rem;
          border: 2px solid #bfbfbf;
          color: #999999;
          border-radius: 0.144928rem;
        }
        .qiandao {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 1.449275rem;
          height: 0.57971rem;
          border-radius: 0.273752rem;
          border: 3px solid #d6d6d7;
          @include font-dpr(12px);
          color: #656566;
          .iconfont {
            color: #afb0b0;
          }
        }
      }
      .info-btns {
        display: flex;
        box-sizing: border-box;
        height: 1.223833rem;
        padding: 0.257649rem 0;
        background: #ffffff;
        .info-btn {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          color: #979798;
          &:not(:last-child) {
            border-right: 1px solid #e2e2e3;
          }
          i {
            font-weight: bold;
            color: #000000;
          }
          span {
            @include font-dpr(12px);
          }
        }
      }
    }
  }
}
</style>
