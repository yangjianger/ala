<template>
    <div class="field">
        <div class="field-item border-bottom">
            <div class="field-left-item">
                <div class="left-icon">
                    <span class="iconfont">&#xe63a;</span>
                </div>
                <div class="left-address">
                    <span class="address">{{this.city}}</span>
                </div>
            </div>
            <div class="field-right-item">
                <div class="user-address-left">
                    <span class="iconfont"> > </span>
                </div>
                <!--<router-link to="/city"></router-link>-->
                <div class="user-address-right" @click="showAreaModel">
                    <span class="iconfont"> &#xe63a; </span>
                    <span class="user-address"> 我的位置 </span>
                </div>
            </div>
        </div>

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

        <time-select></time-select>

        <mt-datetime-picker
                v-model="pickerVisible1"
                type="date"
                ref="picker1"
                year-format="{value}"
                month-format="{value}"
                date-format="{value} 日"
                @confirm="handleConfirm1"
                :startDate="startDate">
        </mt-datetime-picker>

        <mt-datetime-picker
                v-model="pickerVisible2"
                type="date"
                ref="picker2"
                year-format="{value}"
                month-format="{value}"
                date-format="{value} 日"
                @confirm="handleConfirm2"
                :startDate="startDate">
        </mt-datetime-picker>

        <div class="field-item border-bottom">
            <div class="field-left-item field-left-item-serach">
                <div class="left-icon">
                    <span class="iconfont">&#xe62a;</span>
                </div>
                <div class="left-address left-search">
                    <input class="search-text" type="text" placeholder="关键字 / 位置 / 品牌 / 酒店名">
                </div>
            </div>
            <div class="field-right-item">
                <div class="user-address-left user-address-left-icon">
                    <span class="iconfont"> > </span>
                </div>
            </div>
        </div>

        <router-link to="/list">
            <div class="search">
                <span class="iconfont">&#xe62a;</span>
                <span>查找酒店</span>
            </div>
        </router-link>

    </div>
</template>

<script>
    import TimeSelect from './TimeSelect';
    import common from "../../../util/common";
    import AreaList from "@/util/area";
    import { mapMutations, mapState } from 'vuex'

    let currentDate = new Date();
    let myday = common.getWeek(currentDate.getDay()); //注:0-6对应为星期日到星期六

    export default {
        name: "Field",
        components:{
            TimeSelect
        },
        data(){
            return {
<<<<<<< HEAD
                showArea: false,
                areaList: AreaList,
                value: "",
                title: ""
=======
                startDate: new Date(),
                startDates: currentDate.getDate(),
                startMonth: currentDate.getMonth() + 1,
                startWeek: "周"+myday,
                endDates: currentDate.getDate(),
                endMonth: currentDate.getMonth() + 1,
                endWeek: "周"+myday,
                pickerVisible1: "",
                pickerVisible2: "",
>>>>>>> bb2d0935bde685c6c740b89a752e0797c5ca2500
            };
        },
        computed:{
            ...mapState({
                province: "province",
                city: "city",
                defaultCityCode: "defaultCityCode",
                district: "district"
            }),
        },
        mounted(){

            this.value = this.defaultCityCode;

            return;
            let that = this;
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                var point = new BMap.Point(lon, lat);  // 创建坐标点
                // 根据坐标得到地址描述
                var myGeo = new BMap.Geocoder();
                myGeo.getLocation(point, function (result) {
                    let city        = result.addressComponents.city;
                    let province    = result.addressComponents.province;
                    let district    = result.addressComponents.district;

                    let cityInfo = {
                        province: province,
                        city: city,
                        district: district,
                        latitude: lat,
                        longitude: lon,
                    };

                    that.setCityInfo(cityInfo);

                });

            });

        },
        methods:{
            ...mapMutations(['setCity']),

            setCityInfo(cityInfo){
                this.setCity(cityInfo);
            },

            showAreaModel(){
                this.showArea = !this.showArea;
            },
            areaConfirm(res){
                let cityInfo = {
                    province: res[0].name,
                    city: res[1].name,
                    district: res[2].name,
                    defaultCityCode: res[2].code,
                };

                //获取经纬度
                let url = 'http://api.map.baidu.com/geocoder?address='+cityInfo.district+'&output=json&key=yef7EQjGH1iC3emFBmCLGiYBLCqj4gSt&city='+cityInfo.city;

                this.$axios.get(url)
                    .then(function(res){
                        console.log(res);
                    });

                this.setCity(cityInfo);
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

    .field >>> a{
        color: $blueColor
    }

    .field>>>.van-popup{
        width 100%;
    }

    $color = #888
    .field
        margin-top .5rem
        color $color
    .field-item{
        display: flex;
        justify-content: space-between;
        padding: 0 .4rem;
        height 1rem
        line-height 1rem
    }

    .field-item-rili
        height 1.7rem
        line-height 1.7rem
        position relative

    .field-left-item
        display: flex;
        justify-content: flex-start;

        .left-address
            margin-left .4rem
            .address{
                font-size 0.3rem
            }
        .left-search
            width 100%
            input
                width 100%

    .field-left-item-serach
        flex-grow: 2;


    .field-right-item
        display flex

        .user-address-left
            margin-right .5rem

        .user-address-left-icon
            margin-left .3rem

    .left-rili-left-top,.left-rili-left-bottom
        height .5rem

    .left-rili-left-bottom
        display flex
        height: 0.9rem;
        line-height: 0.9rem;


    .left-search-rili
        position: absolute;
        top: 0.2rem;
        line-height: normal;
        left: 0.7rem;
        display flex;
    .left-rili-left-bottom-month-week{
        display: flex;
        flex-direction: column;
        height auto;
        line-height normal;
        justify-content: center;
        margin-left 0.2rem;
        color: #666;
        font-size: 0.1rem;
    }

    .left-rili-left-bottom-date{
        font-size: 0.5rem;
        color: cornflowerblue;
    }

    .left-rili-icon{
        line-height: 1.7rem;
        margin: 0 0.5rem;
    }

    .user-address-right .user-address{
        font-size 0.1rem;
    }

    .search{
        margin: 1rem auto;
        height: 0.7rem;
        line-height: 0.7rem;
        width: 80%;
        border-radius: 50px;
        text-align: center;
        background: cornflowerblue;
        color: #FFF;
        box-shadow: 0 2px 4px #888;

        .iconfont{
            display inline-block;
            margin-right .2rem
        }
    }


</style>