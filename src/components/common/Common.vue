<template>
    <div class="main">
        <button @click="showArea">单机</button>

    </div>
</template>

<script>

    import AreaList from "@/util/area";
    import AreaListEn from "@/util/area";

    export default {
        name: "Common",
        data() {
            return {
                show: false,
                areaList: AreaList,
                value: "330703",
                title: ""
            };
        },
        methods:{
            showArea(){
                this.show = !this.show;
            },
            confirm(res){
                console.log(res);
            },
            cancel(res){
                this.show = false;
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"
    .main>>>.van-popup{
        width 100%;
    }

</style>