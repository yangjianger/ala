<template>
    <div class="main">
        <van-tabs v-model="active" sticky animated swipeable>
            <van-tab title="全部"><order-list></order-list></van-tab>
            <van-tab title="待付款"><order-list></order-list></van-tab>
            <van-tab title="待入住"><order-list></order-list></van-tab>
            <van-tab title="已取消"><order-list></order-list></van-tab>
            <van-tab title="已完成"><order-list></order-list></van-tab>
        </van-tabs>
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