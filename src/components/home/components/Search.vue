<template>
    <div class="search">
        <van-tabs v-model="activeSearch" animated>
            <van-tab title="全日房"><search-field></search-field></van-tab>
            <van-tab title="钟点房"><search-field></search-field></van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import SearchField from './Field'
    export default {
        name: "Search",
        data(){
            return {
                activeSearch: 0
            }
        },
        components:{
            SearchField
        }
    }
</script>

<style scoped>

</style>