<template>
    <div class="account">
        <mcu-header>
            账号
        </mcu-header>
        <div class="content">
            <div class="accBox">
                <div class="text">
                    登录网易音乐<br/>
                     手机电脑多端同步，320k高音质无限下载
                </div>
                <mt-button type="default" size="large" >立即登录</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import mcuHeader from "utils/header/header";
export default {
  components: {
    mcuHeader
  }
};
</script>
<style lang="scss">
.account {
  @include flexColumn;
  .content {
    @include flexColumn;
    background: $baseBgPrey;
    .accBox {
      padding: 0.434783rem 0.241546rem 0;
      text-align: center;
      @include font-dpr(14px);
      height: 3.478261rem;
      background: #ffffff;
      .text {
        line-height: 0.603865rem;
        margin-bottom: .241546rem;
      }
    }
  }
}
</style>
