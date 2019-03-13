<template>
    <div class="main">
        <van-nav-bar
                title="我的足迹"
                left-arrow
                @click-left="onClickLeft"
        />
        <order-info></order-info>
    </div>
</template>

<script>
    import OrderInfo from "./components/OrderInfo";
    export default {
        name: "UserFooter",
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