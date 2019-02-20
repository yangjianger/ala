<template>
    <div class="map-desc">
        <div class="top">
            <div class="left">
                <span class="iconfont">&#xe649;</span>
                <span class="title">酒店详情</span>
            </div>
            <div class="center">
                <span>|</span>
            </div>
            <div class="right">
                <span class="iconfont">&#xe696;</span>
                <span class="title">资讯酒店</span>
            </div>
        </div>
        <div class="map">
            <info-maps></info-maps>
        </div>
        <div class="map-title">
            <span class="iconfont">&#xe63a;</span>
            <span>郑州市二七区二马路77号（火车站出站口200米路西）</span>
        </div>
    </div>
</template>

<script>
    import InfoMaps from './Maps';
    export default {
        name: "Map",
        components:{
            InfoMaps
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"

    .map-desc{
        .top{
            background #ffffff;
            color $titleColor;
            font-size 0.24rem;
            display: flex;
            flex-direction: row;
            justify-content center;
            height: .8rem;
            line-height: .8rem;
            span{
                display inline-block;
            }
            .center{
                margin-left 1rem;
                margin-right 1rem;
            }
            .title{
                margin-left .2rem;
            }
        }
    }

    .map{
        margin-top .1rem;
        background #ffffff;

    }

    .map-title{
        background #ffffff;
        color: $grayColor;
        padding .2rem;
        .iconfont{
            margin-right .1rem;
        }
    }


</style>