<template>
    <div class="main">
        <div class="top">
            <div class="top-title">
                <span>阿拉思家智慧酒店 . 郑州火车站店</span>
            </div>
            <div class="top-desc">
                <span class="top-desc-room">豪华商务大床房</span>
                <span class="top-desc-room-num">A102</span>
                <span class="top-desc-room-title">房间</span>
            </div>
            <div class="top-day">
                <span>2018-9-19日 周三 至 2018-9-21日 周五</span>
                <span class="line">|</span>
                <span>共两晚</span>
            </div>
            <div class="top-room-desc">
                <span>房型详情 ></span>
            </div>
        </div>
        <div class="desc">
            <div class="item room-person">
                <span class="tab room-person-tab">入住人</span>
                <span class="val room-person-name"><input type="text" v-model="username"></span>
            </div>
            <div class="room-margin-top room-person-info room-person">
                <div class="item room-person-num-info border-bottom">
                    <span class="tab room-person-num-tab">房间数量</span>
                    <span class="val room-person-num">1间</span>
                    <span class="float-right room-person-num-more iconfont">&#xe6e0;</span>
                </div>
                <div class="item room-person-tel-info border-bottom">
                    <span class="tab room-person-tel-tab">联系电话</span>
                    <span class="val room-person-tel"><input type="text" v-model="tel"></span>
                    <span class="float-right room-person-tel-close iconfont" @click="clearTel">&#xe634;</span>
                </div>

                <div class="item room-person-mail-info border-bottom">
                    <span class="tab room-person-mail-tab">联系邮箱</span>
                    <span class="val room-person-mail"><input type="text" v-model="mail"></span>
                    <span class="float-right room-person-mail-close iconfont" @click="clearMail">&#xe634;</span>
                </div>

                <div class="item room-person-time-info border-bottom" @click="openPicker">
                    <span class="tab room-person-time-tab">到店时间</span>
                    <span class="val room-person-time">
                        {{arrivalsTime}}
                    </span>
                    <span class="float-right room-person-time-more iconfont">&#xe6e0;</span>
                </div>

                <div class="item room-person-remarks-info border-bottom">
                    <span class="tab room-person-remarks-tab">住客备注</span>
                    <span class="val room-person-remarks"><input type="text" v-model="remarks"></span>
                    <span class="float-right room-person-remarks-more iconfont" @click="clearRemarks">&#xe634;</span>
                </div>
            </div>

            <div class="room-margin-top room-friend-info room-person">
                <div class="item room-friend-title border-bottom help-room">
                    <div class="">
                        <span class="tab help-tab">邀请好友一起入住</span>
                    </div>
                    <div class="help-friend-list-div">
                        <span class="help-friend-icon iconfont">&#xe613;</span>
                        <span class="help-friend-list">通讯录好友</span>
                    </div>
                </div>
                <div class="item room-friend border-bottom">
                    <span class="tab room-friend-tel-tab">好友电话</span>
                    <span class="val room-friend-tel"><input type="text" v-model="friendTel1"></span>
                    <span class="float-right room-friend-tel-close iconfont" @click="clearFriendTel1">&#xe634;</span>
                </div>
            </div>

            <div class="room-margin-top help-friend-info room-person">
                <div class="item border-bottom help-room">
                    <div>
                        <span class="tab help-tab">帮好友入住</span>
                    </div>
                    <div class="help-friend-list-div">
                        <span class="help-friend-icon iconfont">&#xe613;</span>
                        <span class="help-friend-list">通讯录好友</span>
                    </div>
                </div>
                <div class="item help-friend border-bottom">
                    <span class="tab">好友电话</span>
                    <span class="val help-friend-tel"><input type="text" v-model="friendTel2"></span>
                    <span class="float-right help-friend-tel-close iconfont" @click="clearFriendTel2">&#xe634;</span>
                </div>
            </div>

            <div class="room-margin-top room-person-info room-person">
                <div class="item room-person-num-info">
                    <span class="tab">发票单位</span>
                    <span class="val room-person-num"><input type="text" v-model="compony"></span>
                    <span class="float-right room-person-tel-close iconfont" @click="clearCompony">&#xe634;</span>
                </div>
                <div class="item room-person-tel-info">
                    <span class="tab room-person-tel-tab">单位税号</span>
                    <span class="val room-person-tel"><input type="text" v-model="componyNum"></span>
                    <span class="float-right room-person-tel-close iconfont" @click="clearComponyNum">&#xe634;</span>
                </div>
            </div>
        </div>
        <div class="pay">
            <div class="price-info">
                <span class="price-pre">￥</span>
                <span class="price">128.00</span>
            </div>
            <div class="right">
                <div class="pay-desc">
                    <span>明细</span>
                </div>
                <router-link to="/pay">
                    <div class="pay-submit">
                        <span>提交订单</span>
                    </div>
                </router-link>
            </div>

        </div>
        <mt-datetime-picker
                v-model="pickerVisible"
                type="datetime"
                ref="picker"
                year-format="{value}"
                month-format="{value}"
                date-format="{value} 日"
                @confirm="handleConfirm"
                :startDate="startDate">
        </mt-datetime-picker>
    </div>

</template>

<script>
    let currentDate = new Date();
    export default {
        name: "Info",
        data(){
            return {
                arrivalsTime: currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate() + "日 "+ currentDate.getHours()+":"+currentDate.getMinutes(),
                username: "刘德华",
                tel: "18798009929",
                mail: "1084914120@qq.com",
                remarks: "哈哈哈",
                friendTel1: "15313335938",
                friendTel2: "15313335939",
                compony: "阿拉",
                componyNum: "aaan88",
                pickerVisible: "",
                startDate: new Date()
            };
        },
        methods: {
            clearComponyNum: function(){
                this.componyNum = "";
            },
            clearCompony: function(){
                this.compony = "";
            },
            clearFriendTel2: function(){
                this.friendTel2 = "";
            },
            clearFriendTel1: function(){
                this.friendTel1 = "";
            },
            clearRemarks: function(){
                this.remarks = "";
            },
            clearMail: function(){
                this.mail = "";
            },
            clearTel: function(){
                this.tel = "";
            },

            openPicker() {
                this.$refs.picker.open();
            },
            handleConfirm(val){
                let confirmDate = new Date(val);
                this.arrivalsTime = confirmDate.getFullYear() + "-" + (confirmDate.getMonth() + 1) + "-" + confirmDate.getDate() + "日 "+ confirmDate.getHours()+":"+confirmDate.getMinutes();
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"

    .main{
        background-color $bgGrayColor;
        padding-bottom 3rem;
    }
    .top{
        background: linear-gradient(to bottom, $blueBgColor2, $blueColor);
        color $fontWhitrColor;
        padding .4rem;
        padding-top .8rem;
        padding-bottom  1.2rem;
        div{
            line-height .6rem;
        }

        .top-title{
            font-size .32rem;
        }

        .top-desc{
            font-size .26rem;
            span{
                display inline-block;
                margin-right .2rem;
            }
            .top-desc-room-num{
                font-weight 700;
                font-size .32rem;
            }
        }
        .top-day{
            span{
                display inline-block;
            }
        }
        .line{
            margin-right .2rem;
            margin-left .2rem;
        }

        .top-room-desc{
            width: 100%;
            right .8rem;
            font-size .24rem;
            color $fontWhitrGrayColor;
            span{
                display block;
                float right;
            }
        }
    }


    .desc{
        width 96%;
        margin 0 auto;
        margin-top: -.4rem;
        .room-person{
            border-radius .1rem;
        }

        .item{
            padding .4rem;
            background-color #ffffff;
        }

        span{
            display inline-block;
        }

        .tab{
            color $grayColor;
            margin-right: .4rem;
            width 20%;
        }

        .room-margin-top{
            margin-top .2rem;
            border-radius .1rem;
            overflow hidden;
        }

        .float-right{
            color $iconGrayColor;
            float right;
        }

        .help-room{
            display flex;
            flex-direction row;
            justify-content space-between;
            padding-top:0rem;
            padding-bottom:0rem;
            height 1.2rem;
            line-height  1.2rem;
            .help-friend-list-div{
                line-height  1.2rem;
            }
        }

        .help-tab{
            width auto;
            color: $blueColor;
        }

        .help-friend-icon{
            color: $blueColor;
            /*font-size: .6rem;*/
            font-weight: 700;
        }

        .help-friend-list{
            color $grayColor;
            font-size .24rem;
        }

        .val{
            font-size .3rem;
        }
    }

    .pay{
        width 100%;
        display flex;
        flex-direction row;
        justify-content space-between;
        margin-top .2rem;
        height 1.2rem;
        line-height 1.2rem;
        background-color #ffffff;
        position fixed;
        bottom 0px;
        z-index: 2;

        .price-info{
            color $redColor;
            margin-left .2rem;
        }

        .right{
            display flex;
            flex-direction row;
            justify-content space-between;
        }

        .pay-desc{
            color $blueColor;
            font-size .24rem;
            margin-right .24rem;
        }

        .pay-submit{
            background-color $blueColor;
            color $fontWhitrColor;
            text-align center;
            width 2.4rem;
        }

        .price{
            font-size .4rem;

        }
    }
</style>