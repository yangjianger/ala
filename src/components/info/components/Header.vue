<template>
    <div class="header">
        <div class="banner">
            <div class="top">
                <img class="headerImg" @click="infoImagePreview" src="http://s1.jiguo.com/ded50aa0-2080-40ae-92f2-d52844b396d7/640" alt="">
            </div>
            <div class="info">
                <div class="info-left">
                    <span class="iconfont">&#xe75e;</span>
                    <span class="num">20张</span>
                </div>
                <div class="info-right">
                    <span v-if="hasZan" class="iconfont zan">&#xe63b;</span>
                    <span v-else class="iconfont zan zaned">&#xe63b;</span>
                </div>
            </div>
        </div>
        <div class="title-info border-bottom">
            <span class="title">阿拉思家智慧酒店 . 郑州火车站店</span>
            <span class="score">5.0分</span>
            <span class="comment">（5028人点评）</span>
        </div>
    </div>
</template>

<script>
    import { ImagePreview } from 'vant';
    export default {
        name: "Header",
        data(){
            return{
                hasZan: false,
            };
        },
        methods:{
            infoImagePreview(){
                ImagePreview({
                    images:[
                        'http://s1.jiguo.com/ded50aa0-2080-40ae-92f2-d52844b396d7/640',
                        'http://s1.jiguo.com/1b103915-4c4e-41ec-afe8-6a2ae740ba7d/640',
                        'http://s1.jiguo.com/bd01da52-0f6e-4846-8935-d7b15fd88bad/640',
                        'http://s1.jiguo.com/b27aa93a-d3e6-406f-bd5e-478dbcd42495/640',
                        'http://s1.jiguo.com/01351f42-404b-49ee-816b-aae3519c2c1c/640'
                    ],
                    startPosition: 1,
                    showIndicators: true
                });
            }
        },
        components:{

        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"
    .header{
        background #ffffff;
    }
    .banner{
        position relative;
        .top{
            width 100%;
            margin: 0 auto;
            .headerImg{
                display: block;
                height 4.8rem;
                margin: 0 auto;
                width 100%;
            }
        }
        .info{
            display flex;
            flex-direction row;
            justify-content space-between;
            padding-left 0.3rem;
            width 90%;
            position absolute;
            bottom: 0rem;
            line-height: 0.8rem;

            .info-left{
                .num{
                    margin-left .2rem;
                    color #ffffff;
                }
            }

            .zan{
                font-size:0.8rem;
            }

            .zaned{
                color: blue;
            }
        }

    }

    .title-info{
        padding: 0.2rem;
        span{
            display inline-block;
        }
        .title{
            font-size: 0.24rem;
            margin-right .2rem;
            color: $titleColor;
        }
        .score{
            font-size: 0.15rem;
            color: $originColor;
            margin-right .2rem;
        }
        .comment{
            font-size: 0.15rem;
            color: $grayColor;
        }
    }
</style>