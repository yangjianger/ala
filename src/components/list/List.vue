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