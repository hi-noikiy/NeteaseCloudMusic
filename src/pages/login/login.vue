<template>
  <transition name="bot-to-top">
    <div class="login-page">
      <img src="~assets/img/timg.jpg" alt="" class="logo">
      <router-link to="loginform">
        <mt-button size='large'>手机号登录</mt-button>
      </router-link>
      <mt-button size='large'>注册</mt-button>

    </div>
  </transition>

</template>
<script>
export default {};
</script>
<style lang="scss">
.login-page{
  flex: auto;
  background: #efefef;
  padding: 0 1.086957rem;
  .logo {
    display: block;
    width: 2.173913rem;
    margin: 2.979066rem auto 1.803543rem auto;
  }
  .mint-button {
    margin-bottom: 0.644122rem;
  }
}
</style>


