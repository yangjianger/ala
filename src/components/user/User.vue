<template>
    <div class="main">
        <div class="top">
            <div class="logo">
                <img src="./imgs/ala.png" alt="">
            </div>
        </div>
        <div class="user-info">
            <div class="user-num border-bottom">
                <div class="user-num-info">
                    <div class="user-num-list">
                        <div class="item balance">
                            <span class="">账户余额</span>
                            <span class="">968</span>
                        </div>
                        <router-link to="/user-collect">
                            <div class="item collect">
                                <span class="">我的收藏</span>
                                <span class="">25</span>
                            </div>
                        </router-link>
                        <router-link to="/user-footer">
                            <div class="item footprint">
                                <span class="">我的足迹</span>
                                <span class="">63</span>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="avatar">
                    <img src="http://s1.jiguo.com/f94c11ac-01a9-4784-8aa9-3dcf7c0280bf/640" alt="">
                </div>
                <router-link to="/user-comment">
                    <div class="user-more">
                        <span class="iconfont">&#xe67e;</span>
                    </div>
                </router-link>
            </div>
            <div class="my-order">
                <div class="order-info">
                    <div class="left">
                        <span class="iconfont">&#xe6db;</span>
                    </div>
                    <router-link to="/user-order">
                        <div class="right">
                            <span class="title">我的订单</span>
                            <span class="order-desc">开启优质酒店之旅</span>
                        </div>
                    </router-link>
                </div>
                <router-link to="/user-order">
                    <div class="select">
                        <span>查看</span>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="bottom">
            <div class="user-list-info border-bottom">
                <div class="item left border-right">
                    <div class="room-info-desc">

                        <div class="icon">
                            <span class="iconfont">&#xe649;</span>
                        </div>
                        <router-link to="/user-hotel">
                            <div class="room-info">
                                <span class="title">我的酒店</span>
                                <span class="desc">您入住过的酒店</span>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="item right">
                    <div class="room-info-desc">
                        <div class="icon">
                            <span class="iconfont">&#xe649;</span>
                        </div>
                        <router-link to="/user-comment">
                            <div class="room-info">
                                <span class="title">我的点评</span>
                                <span class="desc">我们进步的阶梯</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="user-list-info border-bottom">
                <div class="item left border-right">
                    <div class="room-info-desc">
                        <div class="icon">
                            <span class="iconfont">&#xe649;</span>
                        </div>
                        <router-link to="/user-address">
                            <div class="room-info">
                                <span class="title">常用信息</span>
                                <span class="desc">旅客 地址 手机</span>
                            </div>
                        </router-link>
                    </div>
                </div>
                    <div class="item right">
                        <router-link to='/help'>
                        <div class="room-info-desc">
                            <div class="icon">
                                <span class="iconfont">&#xe649;</span>
                            </div>
                            <div class="room-info">
                                <span class="title">帮助中心</span>
                                <span class="desc">竭诚为您提供帮助</span>
                            </div>
                        </div>
                        </router-link>
                    </div>

            </div>
            <div class="user-list-info border-bottom">
                <div class="item left border-right">
                    <div class="room-info-desc">
                        <div class="icon">
                            <span class="iconfont">&#xe649;</span>
                        </div>
                        <router-link to="/user-service">
                            <div class="room-info">
                                <span class="title">客服中心</span>
                                <span class="desc">有疑问，您找我</span>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="item right">
                    <div class="room-info-desc">
                        <div class="icon">
                            <span class="iconfont">&#xe649;</span>
                        </div>
                        <router-link to="/about">
                            <div class="room-info">
                                <span class="title">关于我们</span>
                                <span class="desc">应用介绍</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let paths = "~@/assets/imgs";
    export default {
        name: "User",
        data(){
            return {
                logo: paths + "/ala.png"

            };
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
    .border-right::before, .border-rightbottom::before, .border-rightleft::before, .border-topright::after{
        border-color $borderGrayColor;
    }

    .top{
        height 3rem;
        width:100%;
        background-color $blueColor;
        padding-top:1rem;

        .logo{
            img{
                display: block;
                width: 1.6rem;
                height: 1.6rem;
                margin: 0 auto;
            }
        }

    }

    .user-num{
        background-color #ffffff;
        position relative;
        padding .4rem;
        .avatar{
            position: absolute;
            top: -1rem;
            left: .6rem;
            img{
                display block;
                width 2rem;
                height 2rem;
                border-radius 50%;
                border: 1px solid #ddd;
                box-shadow 0px 1px 1px #ccc;
            }
        }

        .user-more{
            position absolute;
            top: -.9rem;
            right: .6rem;
            width .6rem;
            height: .6rem;
            line-height:  .6rem;
            border-radius 50%;
            padding .06rem;
            text-align center;
            background-color $bgGrayColor;
        }
    }

    .user-num-list{
        display flex;
        flex-direction row;
        justify-content flex-end;
        align-items center;

        span{
            display block;
        }

        .item{
            display flex;
            flex-direction column;
            justify-content center;
            align-items center;
            margin-right .2rem;
            line-height .5rem;
            font-size .3rem;
            color $fontBlackColor;
        }
    }

    .my-order{
        background-color #ffffff;
        padding .4rem .3rem;
        display flex;
        flex-direction row;
        justify-content space-between;
        align-items center;

        .order-info{
            display flex;
            flex-direction row;
            justify-content space-between;
            align-items center;

            .left{
                margin-right .1rem;
                .iconfont{
                    font-size .6rem;
                    color $blueColor;
                }
            }

            .right{
                span{
                    display block;
                }
                display flex;
                flex-direction column;
                justify-content flex-start;
                font-size .26rem;
                line-height .5rem;
                .title{
                    font-size .32rem;
                    color $fontBlackColor;
                }
                .order-desc{
                    color $grayColor;
                }

            }
        }

        .select{
            border .02rem solid $blueColor;
            padding .06rem;
            color $blueColor;
            width 1rem;
            height .3rem;
            line-height: .3rem;
            text-align center;
            border-radius .8rem;
        }
    }

    .bottom{
        background-color #ffffff;
        margin-top .2rem;
        .user-list-info{
            padding: 0 0.3rem;
            display flex;
            flex-direction row;
            justify-content space-between;
            align-items center;

            .item{
                padding .4rem .1rem;
                width 50%;
            }

            .right{
                margin-left .2rem;
            }

            .room-info-desc{
                display flex;
                flex-direction row;
                justify-content flex-start;
                align-items center;

                .room-info{
                    display flex;
                    flex-direction column;
                    justify-content space-between;
                    align-items flex-start;
                    font-size .26rem;
                    color $grayColor;
                    line-height .4rem;
                    span{
                        display block;
                    }

                    .title{
                        color $fontBlackColor;
                        font-size .32rem;
                    }

                }

                .icon{
                    margin-right .3rem;
                }

                .iconfont{
                    font-size .48rem;
                    color $blueColor;
                }
            }
        }
    }

</style>