<template>
  <div class="login-form">
    <ncmHeader>手机号登录</ncmHeader>
    <div class="form">
      <form action="" onsubmit='return false;'>
        <div class="ncm-form-control">
          <i class="iconfont icon-shouji"></i>
          <input type="text" placeholder="手机号" v-model="phoneNum">
        </div>
        <div class="ncm-form-control">
          <i class="iconfont icon-suo"></i>
          <input type="password" placeholder="密码" v-model="password">
        </div>
        <mt-button size='large' :disabled='disabled' @click="login">登录</mt-button>
      </form>
    </div>

  </div>
</template>
<script>
import ncmHeader from "utils/header/header";
export default {
  data() {
    return {
      phoneNum: "",
      password: ""
    };
  },
  components: {
    ncmHeader
  },
  computed: {
    disabled() {
      return this.phoneNum !== "" && this.password !== "" ? false : true;
    }
  },
  methods: {
    login() {
      var _this = this;
      this.$axios
        .get(
          `/api/login/cellphone?phone=${_this.phoneNum}&password=${
            _this.password
          }`
        )
        .then(res => {
          console.log(res);
          console.log(res.data.profile);
          sessionStorage.uid = res.data.profile.userId
        });
    },
    formValidata() {}
  }
};
</script>
<style lang="scss">
.login-form {
  .form {
    padding: 0.354267rem 0.386473rem 0;
  }
}
form {
  .ncm-form-control {
    height: 1.014493rem;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #e2e2e3;
    .iconfont {
      @include font-dpr(18px);
      color: #8e8f93;
      margin: 0 0.144928rem;
    }
    input {
      @include font-dpr(16px);
      padding-left: 0.193237rem;
    }
  }
  .mint-button {
    margin-top: 0.724638rem;
    background: $baseColor;
    color: #ffffff;
  }
}
</style>
