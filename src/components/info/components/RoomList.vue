<template>
    <div class="main">
        <div class="top">
            <div class="left date">
                <div class="left-date mouth">
                    <span>9月19日</span>
                </div>
                <div class="left-day day">
                    <span>入住</span>
                    <span>今天</span>
                </div>
            </div>
            <div class="center">
                <span>共两晚</span>
            </div>
            <div class="right date">
                <div class="right-date mouth">
                    <span>9月21日</span>
                </div>
                <div class="right-day day">
                    <span>离店</span>
                    <span>后台</span>
                </div>
            </div>
        </div>
        <div class="list">
                <div v-for="(item, index) in list" :key="item.id" class="item-list border-bottom">
                <div class="category border-bottom" :class="item.showContent ? 'gray':''" @click="changeContent(index)">
                    <div class="img-item">
                        <img class="img" src="http://s1.jiguo.com/f995b535-9185-4509-96a0-82939bd8a974/640" alt="">
                    </div>
                    <div class="title-item">
                        <span class="title">豪华商务大床房</span>
                        <span class="desc">舒适大床/无线wifi/贴心早餐</span>
                    </div>
                    <div class="start-room">
                        <div class="innter">
                            <span>开始选房</span>
                        </div>
                    </div>
                </div>
                <div class="child animated fadeIn" v-show="item.showContent">
                    <router-link to="/reserve">
                        <div class="room-desc">
                            <div class="room-item border-bottom">
                                <div class="room-left">
                                    <span class="room-num-title">房间号 ：</span>
                                    <span class="room-num">A 101 (1楼)</span>
                                </div>
                                <div class="room-right">
                                    <div class="room-price">
                                        <span class="room-price-pre">￥</span>
                                        <span class="room-price-num">128</span>
                                    </div>
                                    <div>
                                        <span class="room-reserve">预定</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/reserve">
                        <div class="room-desc">
                            <div class="room-item border-bottom">
                                <div class="room-left">
                                    <span class="room-num-title">房间号 ：</span>
                                    <span class="room-num">A 101 (1楼)</span>
                                </div>
                                <div class="room-right">
                                    <div class="room-price">
                                        <span class="room-price-pre">￥</span>
                                        <span class="room-price-num">128</span>
                                    </div>
                                    <div>
                                        <span class="room-reserve">预定</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/reserve">
                        <div class="room-desc">
                            <div class="room-item border-bottom">
                                <div class="room-left">
                                    <span class="room-num-title">房间号 ：</span>
                                    <span class="room-num">A 101 (1楼)</span>
                                </div>
                                <div class="room-right">
                                    <div class="room-price">
                                        <span class="room-price-pre">￥</span>
                                        <span class="room-price-num">128</span>
                                    </div>
                                    <div>
                                        <span class="room-reserve">预定</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RoomList",
        data(){
            return {
                list: [
                    {
                        'title': "",
                        'showContent': false,
                        'id': 1,
                    },
                    {
                        'title': "",
                        'showContent': false,
                        'id': 2,
                    },
                ],
            };
        },
        methods: {
            changeContent:function(index){
                let temp = this.list;
                temp[index].showContent = !temp[index].showContent;
                this.list = temp;
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"
    .fade-enter,.fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active,.fade-leave-active{
        transition: opacity 3s;
    }
    .main{
        background-color #ffffff;
        padding-bottom 2rem;
        .top{
            background-color #ffffff;
            padding .4rem;
            display flex;
            flex-direction row;
            justify-content center;
            .center{
                margin-left .8rem;
                margin-right .8rem;
                height .4rem;
                line-height .4rem;
                font-weight normal;
                color $blueColor;
                border: 1px solid $blueColor;
                font-size 0.15rem;
                border-radius: .3rem;
                width: 1rem;
                text-align center;
            }
            .date{
                display flex;
                flex-direction row;
                height .6rem;
                .mouth{
                    font-size .34rem;
                    font-weight 800;
                    line-height .6rem;
                }

                .day{
                    display flex;
                    flex-direction column;
                    justify-content space-between;
                    margin-left .2rem;
                    color $grayColor;
                    span{
                        display block;
                        font-size .15rem;
                    }
                }
            }
        }
    }
    .category{
        position relative;

        display flex;
        flex-direction row;
        align-items center;
        padding .2rem;
        height 1.2rem;
        .img-item{
            width 20%;
            margin-right .2rem;
            .img{
                border-radius .1rem;
                display block;
                width 1.2rem;
                height 1.2rem;
            }
        }

        .title-item{
            height: .8rem;
            padding-top .1rem;
            padding-bottom: .1rem;
            display flex;
            flex-direction column;
            justify-content space-between;
            span{
                display block;
                font-size .24rem;
            }
            .title{
                font-size .34rem;
            }
        }
        .start-room{
            position absolute
            right .2rem;
            border-radius .6rem;
            padding 0.1rem;
            display flex;
            justify-content center;
            align-items center;
            background-color $blueBgColor;
            box-shadow 0 1px .2rem $blueColor;
            .innter{
                height: .4rem;
                line-height: .4rem;
                padding .18rem;
                padding-top  .04rem;
                padding-bottom   .04rem;
                color #ffffff;
                font-size .24rem;
                border-radius .8rem;
                background-color $blueColor;
            }
        }
    }

    .room-desc{
        .room-item{
            display flex;
            flex-direction row;
            justify-content space-between;
            padding .4rem;

            .room-left{
                font-size .28rem;
                .room-num-title{
                    color $blueColor;
                }
                .room-num{
                    color #000000;
                }
            }

            .room-right{
                font-size .24rem;
                display flex;
                flex-direction row;
                justify-content space-between;
                align-items center;

                .room-price{
                    color: $redColor;
                }

                .room-price-num{
                    font-size .36rem;
                }

                .room-reserve{
                    margin-left .2rem;
                    border 1px solid $blueColor;
                    color $blueColor;
                    padding .06rem .18rem;
                    border-radius .6rem;
                }
            }
        }
    }

    .gray{
        background-color $bgGrayColor
    }
</style>