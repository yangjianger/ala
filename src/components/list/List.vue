<template>
    <div class="list">
        <van-nav-bar
                title="阿拉思家"
                left-arrow
                @click-left="onClickLeft"
        />
        <list-header></list-header>
        <list-item></list-item>
    </div>
</template>

<script>

    import ListHeader from './components/Header';
    import ListItem from './components/ListItem';

    export default {
        name: "List",

        components: {
            ListHeader,
            ListItem
        },

        methods:{
            onClickLeft(ev){
                this.$router.push('/');
            },
        }
    }
</script>

<style scoped>

</style>