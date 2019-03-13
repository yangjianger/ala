<template>
    <div class="main" v-if="itemInfo">
        <van-nav-bar
                title="阿拉思家"
                left-arrow
                @click-left="onClickLeft"
        />
        <info-header :itemInfo="itemInfo"></info-header>
        <info-map :itemInfo="itemInfo"></info-map>
        <info-room :itemInfo="itemInfo"></info-room>
    </div>
</template>

<script>
    import InfoHeader from './components/Header';
    import InfoMap from './components/Map';
    import InfoRoom from './components/Room';

    export default {
        name: "Info",
        props:{
            //id: String
        },
        data(){
          return {
              active: 0,
              id: this.$route.params.id,
              itemInfo: {}
          }
        },
        components: {
            InfoHeader,
            InfoMap,
            InfoRoom
        },
        mounted(){
            //
            this.getHotelInfo();
        },
        methods:{

            onClickLeft(ev){
                this.$router.go(-1);
            },

            //获取酒店详情
            //http://api.map.baidu.com/marker?location=36.72173,119.17385&title=酒店&content=潍坊柠檬酒店（潍坊学院店）&output=html&src=webapp.baidu.openAPIdemo
            getHotelInfo(){
                this.$axios.get('/index.php?r=api/hotel/detail',{
                    params: {
                        id: this.id
                    }
                }).then(this.hotelDataFormat);
            },

            //酒店详情数据处理
            hotelDataFormat(res){
                let resData = res.data;

                if(!resData){
                    this.$dialog.alert({
                        message: '数据获取失败'
                    }).then(() => {
                        // on close
                    });
                    return false;
                }

                if(!resData.success){
                    this.$dialog.alert({
                        message: resData.errorMsg
                    }).then(() => {
                        // on close
                    });
                    return false;
                }

                let data = resData.result;
                if(!data.hotelId){
                    this.$dialog.alert({
                        message: "酒店数据不存在~"
                    }).then(() => {
                        // on close
                    });
                    return false;
                }

                this.itemInfo = data;
            }
        }
    }
</script>

<style scoped>
    .main{
        background: #cacaca;
    }
</style>