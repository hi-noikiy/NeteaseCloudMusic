<template>
    <div class="music-sheet-list">

        <div class="music-sheet-box" v-for="(music,index) in musicList" :key="index">
            <router-link :to="'/musiclist/'+music.id">
                <div class="music-pic">
                    <img :src="music.picUrl" alt="">  
                    <span class="pnum"><i class="iconfont icon-n"></i>{{music.playCount | handleNum}}万</span>
                </div>
                <div class="music-title">
                    {{music.name}}
                </div>
            </router-link>
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
.music-sheet-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .music-sheet-box{
        position: relative;
        flex-basis: 33%;
        margin-bottom: .193237rem;
        img{
            width: 100%;
        }
        .pnum{
            position: absolute;
            @include font-dpr(12px);
            color: #ffffff;
            top: .096618rem;
            right: .193237rem;
            .iconfont{
                @include font-dpr(12px);            
            }
        }
        .music-title{
            @include font-dpr(12px);            
            line-height: .410628rem;
            padding:.144928rem;
            color: $baseFontColor;
            text-align: justify;
        }
    }
}
</style>

