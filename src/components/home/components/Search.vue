<template>
    <div class="search">
<<<<<<< HEAD
        <van-tabs v-model="activeSearch" animated @click="roomSelect">
=======
        <van-tabs v-model="activeSearch" animated>
>>>>>>> bb2d0935bde685c6c740b89a752e0797c5ca2500
            <van-tab title="全日房"><search-field></search-field></van-tab>
            <van-tab title="钟点房"><search-field></search-field></van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import SearchField from './Field'
    import DateField from './DateField'
    import { mapMutations } from 'vuex'
    export default {
        name: "Search",
        data(){
            return {
                activeSearch: 0
            }
        },
<<<<<<< HEAD

        methods:{
            ...mapMutations(['changeRoomType']),
            roomSelect(index, title){
                if(index == 0){
                    this.changeRoomType(1);
                }else{
                    this.changeRoomType(2);
                }
            }
        },
=======
>>>>>>> bb2d0935bde685c6c740b89a752e0797c5ca2500
        components:{
            SearchField,
            DateField
        }
    }
</script>

<style scoped>

</style>