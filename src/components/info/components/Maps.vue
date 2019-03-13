<template>
    <div id="allmap" ref="allmap" :style="mapStyle"></div>
</template>

<script>
    import BMap from 'BMap'
    export default {
        name: "Maps",
        props:{
            hotelLatitude: String,
            hotelLongitude: String,
            hotelAngle: String,
        },
        data(){
            return {
                mapStyle:{
                    width:'100%',
                    height: '150px'
                }
            }
        },
        methods: {
            drawmap: function () {

                // 百度地图API功能
               // console.log(this.$refs.allmap)
                // let amap = this.$refs.allmap
                let that = this;
                var map = new BMap.Map("allmap");
                var point1 = new BMap.Point(that.hotelLongitude, that.hotelLatitude);
                var marker = new BMap.Marker(point1);
                map.addOverlay(marker);
                map.centerAndZoom(point1, 15);  // 编写自定义函数，创建标注

            },
        },
        mounted: function(){
            this.drawmap()
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"

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
        touch-action: none;
        margin-top .1rem;
        background red;

    }


</style>