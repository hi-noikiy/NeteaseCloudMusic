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
        <div class="person-info">
          <div class="">
            <div class="avatar"><img src="" alt=""></div>
            <div class="info">
              <div class="username"></div>
              <div class="level">LV.</div>
            </div>     
          </div>
          <div class="qiandao">
            <span>签到 <i class="iconfont icon-you"></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mcuHeader from "utils/header/header";
import login from "pages/login/login";
export default {
  data() {
    return {
      isLogin: false
    };
  },
  components: {
    mcuHeader,
    login
  },
  methods: {
    openLogin() {
      this.isLogin = !this.isLogin;
    }
  },
  created() {
    const uid = this.ifHasUid();
    this.isLogin = uid ? true : false;

    this.$axios.get(`/api/user/detail?uid=${uid}`).then(res => {
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
        height: 2.254428rem;
        padding: 0 0.241546rem 0 0.362319rem;
        .avatar{
          width: 1.449275rem /* 180/124.2 */;
          height: 1.449275rem /* 180/124.2 */;
          overflow: hidden;
          img{
            width: 100%;
          }
        }
        .username{
          @include font-dpr(16px);
          color: $baseFontColor;
        }
        .level{
          width: .845411rem /* 105/124.2 */;
          height: .386473rem /* 48/124.2 */;
          border: 2px solid #bfbfbf;
          color: #999999;
          border-radius: .144928rem /* 18/124.2 */;
        }
        .qiandao{
          width: 1.449275rem /* 180/124.2 */;
          height: .57971rem /* 72/124.2 */;
          border-radius: .273752rem /* 34/124.2 */;
          border: 3px solid #d6d6d7;
          @include font-dpr(10px);
          color: #656566;
          .iconfont{
            color: #afb0b0;
          }
        }
      }
    }
  }
}
</style>
