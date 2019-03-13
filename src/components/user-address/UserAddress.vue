<template>
    <div class="main">
        <van-nav-bar
                title="常用信息"
                left-arrow
                right-text="保存"
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />

        <van-cell-group>
            <van-field
                    v-model="username"
                    clearable
                    label="姓名"
                    placeholder="请输入姓名"
            />

            <van-field
                    v-model="phoneNum"
                    type="phone"
                    label="手机号"
                    placeholder="请输入手机号"
                    clearable
            />
            <van-field
                    v-model="city"
                    clearable
                    label="地区"
                    placeholder="请选择地区"
                    @focus="changeShowArea"
            />
            <van-popup v-model="showArea">
                <van-area
                        :area-list="areaList"
                        :columns-num="3"
                        :title="title"
                        :value="value"
                        @confirm="areaConfirm"
                        @cancel="areaCancel"
                />
            </van-popup>
            <van-field
                    v-model="address"
                    clearable
                    label="详细地址"
                    type="textarea"
                    placeholder="详细地址"
                    rows="1"
                    autosize
            />
        </van-cell-group>

    </div>
</template>

<script>
    import AreaList from "@/util/area";
    export default {
        name: "UserAddress",
        data() {
            return {
                username: "",
                phoneNum: "",
                address: "",
                city: "",
                areaList: AreaList,
                showArea: false,
                value: "",
                title: ""
            };
        },
        methods:{
            onClickLeft(ev){
                this.$router.push('/user');
            },
            onClickRight(ev){
                this.$router.push('/user');
            },
            changeShowArea(){
                this.showArea = true;
            },
            areaConfirm(res){
                let cityInfo = {
                    province: res[0].name,
                    city: res[1].name,
                    district: res[2].name,
                    defaultCityCode: res[2].code,
                };

                this.city = res[0].name + " / " + res[1].name + " / " + res[2].name;

                this.showArea = false;
            },
            areaCancel(res){
                this.showArea = false;
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