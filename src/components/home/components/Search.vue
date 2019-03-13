<template>
    <div class="search">

        <van-tabs v-model="activeSearch" animated @click="roomSelect">

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
        components:{
            SearchField,
            DateField
        }
    }
</script>

<style scoped>

</style>