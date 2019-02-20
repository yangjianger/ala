<template>
    <div class="main">
        <div class="top">
            <div class="title border-bottom">
                <div class="top-icon">
                    <span class="iconfont">&#xe62b;</span>
                </div>
                <div class="title-info">
                    <span>恭喜您成功预订</span>
                    <span class="blue">（A105）</span>
                    <span>和</span>
                    <span class="blue">（A302）</span>
                    <span>房间</span>
                </div>
                <div class="price">
                    <span class="price-pre">￥</span>
                    <span class="price-num">256</span>
                </div>
            </div>
            <div class="desc border-bottom">
                <div class="desc-title">
                    <span class="iconfont">&#xe66a;</span>
                    <span class="desc-title-font">费用明细</span>
                </div>
                <div class="desc-list">
                    <div class="item">
                        <div class="item-desc">
                            <span class="">豪华商务大床房</span>
                            <span class="">A105</span>
                            <span class="time">2018.09.20</span>
                            <span class="">(1间)</span>
                        </div>
                        <div class="item-price">
                            <span class="item-price-pre">￥</span>
                            <span class="item-price-num">128</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-desc">
                            <span class="">豪华商务大床房</span>
                            <span class="">A105</span>
                            <span class="time">2018.09.20</span>
                            <span class="">(1间)</span>
                        </div>
                        <div class="item-price">
                            <span class="item-price-pre">￥</span>
                            <span class="item-price-num">128</span>
                        </div>
                    </div>
                </div>
                <div class="desc-list-more">
                    <span class="iconfont">&#xe611;</span>
                </div>
            </div>
        </div>
        <Gear></Gear>
        <div class="bottom">
            <div class="room-list">
                <div class="item margin-bottom">
                    <div class="item-common room-info border-bottom">
                       <div class="left">
                           <div class="room-title">
                               <span>阿拉思家智慧酒店 . 郑州火车站店</span>
                           </div>
                           <div class="room-desc">
                               <span>豪华商务大床房</span>
                               <span>A105</span>
                               <span>(1间)</span>
                           </div>
                       </div>
                        <div class="right">
                            <span class="iconfont">&#xe6e0;</span>
                        </div>
                    </div>
                    <div class="item-common room-time span-display">
                        <div class="">
                            <span class="tab">入住时间：</span>
                            <span>2018年9月29日</span>
                            <span>22:00前</span>
                        </div>
                        <div class="">
                            <span class="tab">离店时间：</span>
                            <span>2018年9月30日</span>
                            <span>共一晚</span>
                        </div>
                        <div class="">
                            <span class="tab">订单状态：</span>
                            <span>已支付</span>
                        </div>
                    </div>
                </div>
                <div class="item margin-bottom">
                    <div class="item-common room-info border-bottom">
                        <div class="left">
                            <div class="room-title">
                                <span>阿拉思家智慧酒店 . 郑州火车站店</span>
                            </div>
                            <div class="room-desc">
                                <span>豪华商务大床房</span>
                                <span>A105</span>
                                <span>(1间)</span>
                            </div>
                        </div>
                        <div class="right">
                            <span class="iconfont">&#xe6e0;</span>
                        </div>
                    </div>
                    <div class="item-common room-time span-display">
                        <div class="">
                            <span class="tab">入住时间：</span>
                            <span>2018年9月29日</span>
                            <span>22:00前</span>
                        </div>
                        <div class="">
                            <span class="tab">离店时间：</span>
                            <span>2018年9月30日</span>
                            <span>共一晚</span>
                        </div>
                        <div class="">
                            <span class="tab">订单状态：</span>
                            <span>已支付</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="user-info span-display">
                <div class="rows margin-bottom info">
                    <div class="time">
                        <span class="tab">入住人：</span>
                        <span>刘德华</span>
                    </div>
                    <div class="tel">
                        <span class="tab">联系电话：</span>
                        <span>18798009929</span>
                    </div>
                    <div class="friend-tel">
                        <span class="tab">好友手机：</span>
                        <span>17610373052</span>
                    </div>
                </div>
                <div class="rows margin-bottom company">
                    <div class="company-name">
                        <span class="tab">发票单位：</span>
                        <span>阿拉思家智慧酒店</span>
                    </div>
                    <div class="company-num">
                        <span class="tab">单位税号：</span>
                        <span>8021u812iui128u984</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Gear from '@/common/gear/Gear'
    export default {
        name: "Order",
        components:{
            Gear
        },
        data(){
            return {
                active: 1,
                startDate: new Date(),
                pickerValue: "2018年09月19 12:00:00",
                pickerVisible: ""
            }
        },
        methods: {
            openPicker() {
                this.$refs.picker.open();
            },

        }
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
        padding-bottom .1rem;
        .title{
            text-align center;
            padding-bottom  .4rem;
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
            font-size .24rem;
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

            .price-num{
                margin-left .1rem;
                font-size .6rem;
            }
        }

        .desc{
            padding .4rem 0;
            padding-bottom .2rem;

        }

        .desc-title, .desc-list{
            padding .2rem 0;
            color: $fontBlackColor
        }

        .desc-title{
            font-size .26rem;
            span{
                display inline-block;
            }
            .iconfont{
                margin-right .1rem;
                color $blueColor;
            }
        }

        .desc-list{
            color $grayColor;
            font-size .24rem;
            margin-left .42rem;
            .item{
                margin-bottom  .1rem;
                display flex;
                flex-direction row;
                justify-content space-between;

                .item-desc{
                    span{
                        display inline-block;
                        margin-right .16rem;
                        font-weight 100;
                    }
                    .time{
                        margin-right .28rem;
                        margin-left .16rem;
                    }
                }

                .item-price{
                    color $blueColor;
                    .item-price-num{
                        font-size .32rem;
                    }
                }
            }
        }

        .desc-list-more{
            text-align center;
            color $grayColor;
        }




    }

    .bottom{
        .rows,.item{
            padding .2rem .2rem;
            background-color #ffffff;
            line-height .5rem;
            font-size .24rem;
            color $grayColor;
        }

        .item-common{
            padding .2rem 0rem;
        }

        .margin-bottom{
            margin-bottom .2rem;
        }
        .room-info{
            padding-top 0;
            display flex;
            flex-direction row;
            justify-content space-between;
            align-items center;
        }

        .room-title{
            font-size .3rem;
            color $fontBlackColor;
        }

        .room-desc{
            span{
                display inline-block;
                margin-right .2rem;
            }
        }

        .span-display{
            span{
                display inline-block;
            }
            .tab{
                width 1.2rem;
            }
        }



    }
</style>