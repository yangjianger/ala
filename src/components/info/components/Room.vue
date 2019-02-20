<template>
    <div class="main">
        <van-tabs v-model="activeRoom" animated>
            <van-tab title="全日房"><room-list></room-list></van-tab>
            <van-tab title="钟点房"><room-list></room-list></van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import RoomList from './RoomList';
    export default {
        name: "Room",
        data(){
            return {
                activeRoom: 0,
            }
        },
        components:{
            RoomList
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"
    .main{
        margin-top: .1rem;
    }
    .main >>> .van-tabs__line{
        background-color: $blueColor;
    }
    .main >>> .van-tab--active{
        color: $blueColor;
    }
    .main >>> .van-tab{
        background-color: #fafafa;
    }
    .main >>> .van-tabs--line .van-tabs__wrap{
        background-color: #ccc;
    }
</style>