<template>
    <div>
        <van-nav-bar
                title="阿拉思家"
                left-arrow
                @click-left="onClickLeft"
        />
        <reserve-info></reserve-info>
    </div>
</template>

<script>
    import ReserveInfo from './components/Info';
    export default {
        name: "Reserve",
        components: {
            ReserveInfo
        },
        methods:{
            onClickLeft(ev){
                this.$router.go(-1);
            },
        }
    }
</script>

<style scoped>

</style>