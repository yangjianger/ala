<template>
    <div class="main">
        <van-nav-bar
                title="客服中心"
                left-arrow
                right-text="保存"
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />

        <van-cell-group>
            <van-field
                    v-model="question"
                    clearable
                    label="问题名称"
                    placeholder="请输入问题名称"
            />

            <van-field
                    v-model="desc"
                    clearable
                    label="问题描述"
                    type="textarea"
                    placeholder="问题描述"
                    rows="1"
                    autosize
            />

            <van-field
                    v-model="phoneNum"
                    type="phone"
                    label="手机号"
                    placeholder="请输入手机号"
                    clearable
            />
        </van-cell-group>

    </div>
</template>

<script>
    import AreaList from "@/util/area";
    export default {
        name: "UserService",
        data() {
            return {
                question: "",
                phoneNum: "",
                desc: "",
            };
        },
        methods:{
            onClickLeft(ev){
                this.$router.push('/user');
            },
            onClickRight(ev){
                this.$router.push('/user');
            },
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"
    .main>>>.van-popup{
        width 100%;
    }

</style>