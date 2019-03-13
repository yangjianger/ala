<template>
    <div class="main">
        <div class="list">
            <div class="top border-bottom">
                <span class="title">豪华商务大床房</span>
                <span class="tab no-pay"></span>
            </div>
            <div class="bottom">
                <div class="left">
                    <img src="http://s1.jiguo.com/ded50aa0-2080-40ae-92f2-d52844b396d7/640" alt="">
                </div>
                <div class="right">
                    <div class="">
                        <span class="pre">数量：</span>
                        <span class="">1间</span>
                    </div>
                    <div class="">
                        <span class="pre">总价：</span>
                        <span class="">￥128</span>
                    </div>
                    <div class="">
                        <span class="pre">房间号：</span>
                        <span class="">A103</span>
                    </div>
                    <div class="">
                        <span class="pre">订单编号：</span>
                        <span class="">201909191234557865</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderList"
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"
    .main{
        padding-bottom 3rem;
        padding-top  .001rem;
        background-color $bgGrayColor;
        min-height: 9.4rem;
    }

    .border-bottom::before{
        border-color $borderGrayColor;
    }

    .list{
        margin-top .2rem;
        background-color #ffffff;
    }

    .top{
        padding .3rem;
        font-size .36rem;
        color $fontBlackColor;
        display flex;
        flex-direction row;
        justify-content space-between;
        align-items center;
        span{
            display inline-block;
        }

        .tab{
            font-size .26rem;
        }

        .no-pay{
            color $orderNoPayColor
        }

        .wait{
            color $orderWaitColor
        }

        .complete{
            color $orderCompleteColor
        }
        .cancel{
            color $orderCancleColor
        }
    }

    .bottom{
        padding .2rem;
        display flex;
        flex-direction row;
        justify-content flex-start;

        .left{
            margin-right .3rem;
            img{
                display block;
                width: 2.4rem;
                height: 1.8rem;
                border-radius .2rem;
            }
        }

        .right{
            display flex;
            flex-direction column;
            justify-content: space-around;
            color $fontBlackColor;
        }
    }

</style>