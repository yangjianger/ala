<template>
    <div class="map-desc" v-if="hasData">
        <div class="top">
            <div class="left">
                <span class="iconfont">&#xe649;</span>
                <span class="title">酒店详情</span>
            </div>
            <div class="center">
                <span>|</span>
            </div>
            <div class="right" @click="alertTel">
                <span class="iconfont">&#xe696;</span>
                <span class="title">资讯酒店</span>
            </div>
        </div>
        <div class="map-click" @click="gotoBaidu">
            <div class="map">
                <info-maps
                        :hotelLatitude="hotelLatitude"
                        :hotelLongitude="hotelLongitude"
                        :hotelAngle="hotelAngle"
                ></info-maps>
            </div>
            <div class="map-title">
                <span class="iconfont">&#xe63a;</span>
                <span>{{itemInfo.hotelAddress}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import InfoMaps from './Maps';
    export default {
        name: "Map",
        props:{
            itemInfo: Object
        },
        watch:{
            itemInfo(nv, ov){
                this.item = nv;
                this.hotelLatitude = this.item.hotelLatitude;
                this.hotelLongitude = this.item.hotelLongitude;
                this.hasData = true;
            }
        },
        data(){
            return {
                hasData: false,
                item: {},
                hotelAngle: this.itemInfo.hotelAngle,
                hotelLatitude: this.itemInfo.hotelLatitude,
                hotelLongitude: this.itemInfo.hotelLongitude,
            };
        },
        components:{
            InfoMaps
        },
        methods:{
            alertTel(){
                let that = this;
                this.$dialog.alert({
                    message: that.itemInfo.hotelPhone
                }).then(() => {});
            },
            gotoBaidu(){
                //
                let itemInfo = this.itemInfo;
                window.location = "http://api.map.baidu.com/marker?location="+itemInfo.hotelLatitude+","+itemInfo.hotelLongitude+"&title=酒店地址&content="+itemInfo.hotelAddress+"&output=html&src=webapp.baidu.openAPIdemo";
                return true;
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"

    .map-click{
        overflow hidden;
    }

    .map-desc{
        .top{
            background #ffffff;
            color $titleColor;
            font-size 0.24rem;
            display: flex;
            flex-direction: row;
            justify-content center;
            height: .8rem;
            line-height: .8rem;
            span{
                display inline-block;
            }
            .center{
                margin-left 1rem;
                margin-right 1rem;
            }
            .title{
                margin-left .2rem;
            }
        }
    }

    .map{
        margin-top .1rem;
        background #ffffff;

    }

    .map-title{
        background #ffffff;
        color: $grayColor;
        padding .2rem;
        .iconfont{
            margin-right .1rem;
        }
    }


</style>