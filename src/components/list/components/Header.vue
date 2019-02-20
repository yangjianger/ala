<template>
    <div class="header">
        <div class="header-item">
            <div class="header-item-left">
                <span class="header-month item-title">9月18日</span>
                <span class="header-day item-small-title">入住1晚</span>
            </div>
            <div class="header-item-right">
                <span class="iconfont">&#xe75c;</span>
            </div>
        </div>
        <div class="header-item">
            <div class="header-item-left">
                <span class="item-title position-re">距离优先</span>
            </div>
            <div class="header-item-right">
                <span class="iconfont">&#xe75c;</span>
            </div>
        </div>
        <div class="header-item">
            <div class="header-item-left">
                <span class="item-title position-re">城市/地域</span>
            </div>
            <div class="header-item-right">
                <span class="iconfont">&#xe75c;</span>
            </div>
        </div>
        <div class="header-item">
            <div class="header-item-left">
                <span class="item-title position-re">筛选</span>
            </div>
            <div class="header-item-right">
                <span class="iconfont">&#xe75c;</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"

    .header{
        font-size: 0.28rem;
        padding .2rem;
        display flex;
        flex-direction row;
        justify-content space-between;
        color: $color;

        .header-item{
            height .6rem;
            line-height .3rem;
            display flex;
            flex-direction row;
            align-items center;
            justify-content center;
            .header-item-left{
                display flex;
                flex-direction column;
                align-items center;
                justify-content center;
                margin-right .1rem;
                .position-re{
                    display block;
                    margin-top: .1rem;
                }
                .item-small-title{
                    font-size .12rem;
                }
            }
        }
    }

</style>