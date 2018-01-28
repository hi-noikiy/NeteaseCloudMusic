<template>
    <div class="music-list">
        <div class="music-box" v-for="(music,index) in musicList" :key="index">
            <div class="music-pic">
                <img :src="music.picUrl" alt="">  
                <span class="pnum"><i class="iconfont icon-n"></i>{{music.playCount | handleNum}}万</span>
            </div>
            <div class="music-title">
                {{music.name}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["musicList"],
    filters: {
        handleNum(value){
            return Math.round(value/10000);
        }
    }
};
</script>
<style lang="scss">
.music-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .music-box{
        position: relative;
        flex-basis: 33%;
        margin-bottom: ui2css(24);
        img{
            width: 100%;
        }
        .pnum{
            position: absolute;
            font-size: ui2css(27);
            color: #ffffff;
            top: ui2css(12);
            right: ui2css(24);
        }
        .music-title{
            font-size: ui2css(36);
            line-height: ui2css(51);
            padding:ui2css(18);
            color: $baseFontColor;
        }
    }
}
</style>

