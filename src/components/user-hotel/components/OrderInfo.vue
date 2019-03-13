<template>
    <div class="main">
        <order-list></order-list>
    </div>
</template>

<script>
    import OrderList from "./OrderList";
    export default {
        name: "OrderInfo",
        components:{
            OrderList
        },
        data(){
            return {
                active: 0
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"
    .main >>> .van-tabs__line{
        background-color: $blueColor;
    }
</style>