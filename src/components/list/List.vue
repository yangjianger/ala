<template>
    <div class="list">
        <list-header></list-header>
        <list-item></list-item>
    </div>
</template>

<script>

    import ListHeader from './components/Header';
    import ListItem from './components/ListItem';

    export default {
        name: "List",
        data(){
            return {
                active: 0,
            }
        },
        components: {
            ListHeader,
            ListItem
        }
    }
</script>

<style scoped>

</style>