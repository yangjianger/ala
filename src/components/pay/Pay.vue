<template>
    <div class="main">
        <div class="top">
            <div class="title">
                <div class="top-icon">
                    <span class="iconfont">&#xe62b;</span>
                </div>
                <div class="title-info">
                    <span>恭喜您成功预订!</span>
                </div>
                <div class="price">
                    <span class="wait">待付款</span>
                    <span class="price-pre">￥</span>
                    <span class="price-num">256</span>
                </div>
            </div>
        </div>
        <Gear></Gear>
        <div class="order-info">
            <span class="">订单详情</span>
            <span class="iconfont">&#xe6e0;</span>
        </div>
        <div class="pay margin-top">
            <div class="pay-title border-bottom">
                <span>支付方式</span>
            </div>
            <div class="pay-platom  border-bottom">
                <div class="weixin">
                    <span class="iconfont">&#xe6c9;</span>
                </div>
                <div class="pay-way">
                    <span class="pay-way-title">微信支付</span>
                    <span class="pay-way-desc">推荐安装微信5.0及以上版本的用户使用</span>
                </div>
                <div class="select">
                    <span class="iconfont">&#xe678;</span>
                </div>
            </div>
        </div>
        <div class="conform margin-top">
            <span>确认支付</span>
        </div>
    </div>
</template>

<script>
    import Gear from '@/common/gear/Gear'
    export default {
        name: "Pay",
        components:{
            Gear
        },
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"
    .main{
        background-color $bgGrayColor;
        padding-bottom 3rem;
    }

    .border-bottom::before{
        border-color $borderGrayColor;
    }
    .top{
        background-color #ffffff;
        padding .6rem .2rem;
        padding-bottom 0rem;
        .title{
            text-align center;
            padding-bottom  0rem;
            line-height .6rem;
            div{
                padding .14rem;
            }
        }

        .top-icon{
            span{
                font-size .8rem;
                background: linear-gradient(to right, $blueBgColor2, $blueColor);
                -webkit-background-clip: text;
                color: transparent;
            }
        }

        .title-info{
            font-size .32rem;
            color $fontBlackColor;
        }

        .blue{
            color $blueColor;
        }

        .price{
            color $redColor;
            font-size .3rem;

            span{
                display inline-block;
            }

            .wait{
                color $grayColor;
                font-size  .28rem;
            }

            .price-num{
                margin-left .1rem;
                font-size .6rem;
            }
        }

    }

    .order-info{
        background-color #ffffff;
        padding .4rem;
        display flex;
        flex-direction row;
        justify-content space-between;
        align-items center;
        color $fontBlackColor;
        span{
            display inline-block;
        }

        .iconfont{
            color $grayColor;
        }
    }

    .margin-top{
        margin-top .2rem;
    }

    .pay{
        background-color #ffffff;

        .pay-title,.pay-platom{
            padding .4rem;
        }

        .pay-platom{
            display flex;
            flex-direction row;
            justify-content space-between;
            align-items center;
        }

        .pay-way{
            display flex;
            flex-direction column;
            justify-content space-between;
            line-height .4rem;
            span{
                display inline-block;
            }

            .pay-way-title{
                color: $fontBlackColor;
                font-size .32rem;
            }

            .pay-way-desc{
                color: $grayColor;
                font-size .26rem;
            }
        }
        .weixin .iconfont{
            font-size .72rem;
            color rgb(80, 183, 78);
        }
        .select .iconfont{
            color rgb(29, 172, 236);
        }
    }

    .conform{
        width 5rem;
        margin auto auto;
        margin-top 1.6rem;
        text-align center;
        color #ffffff;
        background-color $blueColor;
        box-shadow 3px 4px 10px $blueColor;
        padding .3rem .4rem;
        border-radius .8rem;
    }





</style>