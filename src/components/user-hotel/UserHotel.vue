<template>
    <div class="main">
        <van-nav-bar
                title="我的酒店"
                left-arrow
                @click-left="onClickLeft"
        />
        <order-info></order-info>
    </div>
</template>

<script>
    import OrderInfo from "./components/OrderInfo";
    export default {
        name: "UserOrder",
        components:{
            OrderInfo
        },
        methods:{
            onClickLeft(ev){
                this.$router.push('/user');
            }
        }
    }
</script>

<style scoped>

</style>