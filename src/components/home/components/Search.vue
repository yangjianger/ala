<template>
    <div class="search">
        <van-tabs v-model="active" animated>
            <van-tab title="全日房"><search-field></search-field></van-tab>
            <van-tab title="钟点房"><search-field></search-field></van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import SearchField from './Field'
    export default {
        name: "Search",
        components:{
            SearchField
        }
    }
</script>

<style scoped>

</style>