<template>
    <div class="comment-item">
        <div class="avater-wrap">
            <img :src="commentInfo.user?commentInfo.user.avatarUrl:''" alt="">
        </div>
        <div class="comment">
            <div class="user">
                <div class="user-name">魏广辰</div>
                <div class="commment-date">2017年10月10日</div>
            </div>
            <div class="comment-detail">
                附件二维我金佛我IE纠纷IE金佛我金佛IQ纠纷IE欧文
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["commentInfo"]
};
</script>
<style lang="scss">
.comment-item {
  padding: 0.241546rem 0 0 0.241546rem;
  .avatar-wrap {
    width: 0.724638rem;
    margin-right: 0.241546rem;
    img {
      width: 0.724638rem;
      height: 0.724638rem;
    }
  }
  .comment{
      .user-name{
          @include font-dpr(12px);
          color: #656566;
      }
      .comment-date{
          @include font-dpr(7px);
          color: #979798;
      }
  }
}
</style>
