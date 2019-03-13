<template>
    <div class="header">
        <div class="banner">
            <div class="top" v-if="itemInfo.hotelPic">
                <img class="headerImg" @click="infoImagePreview" :src="hotelPicPath + itemInfo.hotelPic" alt="">
            </div>
            <div class="info">
                <div class="info-left">
                    <span class="iconfont">&#xe75e;</span>
                    <span class="num">{{imagesNum}}张</span>
                </div>
                <div class="info-right">
                    <span v-if="hasZan" class="iconfont zan">&#xe63b;</span>
                    <span v-else class="iconfont zan zaned">&#xe63b;</span>
                </div>
            </div>
        </div>
        <div class="title-info border-bottom">
            <span class="title">{{itemInfo.hotelName}}</span>
            <span class="score" v-if="itemInfo.hotelScore > 0">{{itemInfo.hotelScore}}分</span>
            <span class="comment" v-if="itemInfo.commentNum > 0">（5028人点评）</span>
            <span class="comment" v-else>（暂无点评）</span>
        </div>
    </div>
</template>

<script>
    import { ImagePreview } from 'vant';
    export default {
        name: "Header",
        props:{
            itemInfo: Object
        },
        watch:{
            itemInfo(nv, ov){
                this.itemInfo = nv;
                this.imageFormat();
            }
        },
        data(){
            return{
                hotelPicPath: 'http://www.alalx.cn/static/upload/hotelpic/',
                hasZan: false,
                imagesNum: 0,
                images: [],
            };
        },
        mounted(){

            this.imageFormat();
        },
        methods:{
            infoImagePreview(){
                let that = this;
                ImagePreview({
                    images:that.images,
                    startPosition: 1,
                    showIndicators: true
                });
            },

            imageFormat(){
                let that = this,
                    images = [];
                if( this.itemInfo.images && this.itemInfo.images.length > 0){
                    this.itemInfo.images.forEach(function(val, item, index){
                        images.push(
                            that.hotelPicPath + val
                        );
                    });
                    that.images = images;
                    that.imagesNum = images.length;
                }
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