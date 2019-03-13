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
<<<<<<< HEAD

=======
        data(){
            return {

            }
        },
>>>>>>> bb2d0935bde685c6c740b89a752e0797c5ca2500
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