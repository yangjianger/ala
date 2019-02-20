<template>
    <div class="main">
        <home-banner></home-banner>
        <home-search></home-search>
    </div>
</template>

<script>
    import HomeBanner from './components/Banner';
    import HomeSearch from './components/Search';

    export default {
        name: "Home",
        components: {
            HomeBanner,
            HomeSearch
        }
    }
</script>

<style scoped>

</style>