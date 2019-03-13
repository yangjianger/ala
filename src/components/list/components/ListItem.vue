<template>
    <div class="list-item">
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <router-link v-for="item in hotelList" :key="item.hotelId" :to="'/info/' + item.hotelId">
                <div class="list border-top">
                    <div class="left">
                        <img :src="hotelPicPath + item.hotelPic" alt="">
                    </div>
                    <div class="right border-bottom">
                        <div class="title">
                            <!--<span>阿拉思家智慧酒店</span>-->
                            <!--<span>.</span>-->
                            <span>{{item.hotelName}}</span>
                        </div>
                        <div class="score">
                            <span class="score-item">{{item.hotelScore}}分</span>
                            <span>|</span>
                            <span class="iconfont">&#xe778;</span>
                            <span class="iconfont">&#xe953;</span>
                        </div>
                        <div class="desc">
                            <span>{{item.hotelSummary}}</span>
                            <span>|</span>
                            <span>{{item.hotelAddress}}</span>
                        </div>
                        <div class="price">
                            <div class="price-left">
                                <span>距您直线距离{{item.dis}}m</span>
                            </div>
                            <div class="price-right">
                                <span class="price-pre">￥</span>
                                <span class="price-num">{{item.hotelPrice}}</span>
                                <span class="price-desc">元起</span>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
        </van-list>

    </div>
</template>

<script>
    import { mapMutations, mapState } from 'vuex'
    import axios from 'axios'
    export default {
        name: "ListItem",
        data(){
            return {
                hotelPicPath: 'http://www.alalx.cn/static/upload/hotelpic/',
                hotelList:[],
                limit: 0,
                size: 10,
                hasList: true,
                loading: false,
                offset: "600",
                finished: false
            }
        },
        computed:{
            ...mapState({
                romeType        : 'romeType',
                hotelProvincial : 'province',
                hotelCities     : 'city',
                hotelCounties   : 'district',
                startTime       : 'startTime',
                endTime         : 'endTime',
            }),
        },
        mounted(){
          //  this.getHotelList();
        },

        methods:{
            onLoad() {
                this.getHotelList();
            },
            getHotelList(){
                axios.get('/index.php?r=api/hotel/list', {
                    params:{
                        type:               this.romeType,
                        limit:              this.limit,
                        size:               this.size,
                        hotelProvincial:    this.hotelProvincial,
                        hotelCities:        this.hotelCities,
                        hotelCounties:      this.hotelCounties,
                        startTime:          this.startTime,
                        endTime:            this.endTime,
                    }
                }).then(this.getList)
            },

            getList(res){
                if(!this.hasList){
                    return;
                }
                this.loading = true;
                let hotelList = this.hotelList;
                let data = res.data.result;
                let limit = res.data.limit;
                if(data.length > 0){
                    data.forEach(function(ele, index){
                        hotelList.push(ele);
                    });
                    this.hotelList = hotelList;
                    this.limit = limit;
                    this.loading = false;
                }else{
                    this.hasList = false;
                    this.loading = false;
                    this.finished = true;
                }

            }

        }
    }
</script>

<style scoped lang="stylus">
    .list-item{
        margin-bottom 1.5rem;
    }
    .list{
        padding .2rem;
        display flex;
        flex-direction row;
        color: #333333;

        .left{
            width 24%;
            overflow hidden;
            img{
                width: 1.5rem;
                height: 1.5rem;
                border-radius 0.1rem;
            }
        }

        .right{
            width: 5.6rem;
            line-height: .4rem;
            .title{
                font-size 0.30rem;
            }
            .score{
                font-size 0.20rem;
                color coral;
                span{
                    display inline-block;
                    margin-right 0.1rem;
                }
            }

            .desc{
                font-size 0.24rem;
                color: darkgray;
            }

            .price{
                color coral;
                font-size 0.22rem;
                display flex;
                flex-direction row;
                justify-content space-between;
                margin-top .2rem;
                .price-num{
                    font-size .4rem;
                }
            }
        }

    }
</style>