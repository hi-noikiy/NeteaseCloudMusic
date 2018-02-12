<template>
  <div class="account">
    <mcu-header>
      账号
    </mcu-header>
    <div class="content">
      <div class="accBox">
        <div class="text">
          登录网易音乐<br/> 手机电脑多端同步，320k高音质无限下载
        </div>
        <router-link to="login">
          <mt-button type="default" size="large" @click="openLogin()">立即登录</mt-button>
        </router-link>

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
  created () {
    this.$axios.get('/api/user/subcount').then(res =>{
      console.log(res)
    })
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
    .accBox {
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
  }
}


</style>
