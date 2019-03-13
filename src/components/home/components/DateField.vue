<template>
    <div class="field">
        <div class="field-item border-bottom">
            <div class="field-left-item">
                <div class="left-icon">
                    <span class="iconfont">&#xe63a;</span>
                </div>
                <div class="left-address">
                    <span class="address">郑州市金水区</span>
                </div>
            </div>
            <div class="field-right-item">
                <div class="user-address-left">
                    <span class="iconfont"> > </span>
                </div>
                <div class="user-address-right">
                    <span class="iconfont"> &#xe63a; </span>
                    <span class="user-address"> 我的位置 </span>
                </div>
            </div>
        </div>
        <div class="field-item border-bottom field-item-rili">
            <div class="field-left-item field-left-item-serach field-left-item-rili">
                <div class="left-icon">
                    <span class="iconfont">&#xe632;</span>
                </div>
                <div class="left-address left-search left-search-rili">
                    <div class="left-rili-left" @click="openPicker1">
                        <div class="left-rili-left-top">
                            <span>入住</span>
                        </div>
                        <div class="left-rili-left-bottom">
                            <div class="left-rili-left-bottom-date">
                                <span>{{startDates}}</span>
                            </div>
                            <div class="left-rili-left-bottom-month-week">
                                <span class="month">{{startMonth}}月</span>
                                <span class="week">{{startWeek}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="left-rili-left left-rili-icon"> / </div>
                    <div class="left-rili-left" @click="openPicker2">
                        <div class="left-rili-left-top">
                            <span>退房</span>
                        </div>
                        <div class="left-rili-left-bottom">
                            <div class="left-rili-left-bottom-date">
                                <span>{{endDates}}</span>
                            </div>
                            <div class="left-rili-left-bottom-month-week">
                                <span class="month">{{endMonth}}月</span>
                                <span class="week">{{endWeek}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="field-right-item">
                <div class="user-address-left user-address-left-icon">
                    <span class="iconfont"> > </span>
                </div>
            </div>
        </div>

        <mt-datetime-picker
                v-model="pickerVisible1"
                type="time"
                ref="picker1"
                @confirm="handleConfirm1"
                :startDate="startDate">
        </mt-datetime-picker>

        <mt-datetime-picker
                v-model="pickerVisible2"
                type="time"
                ref="picker2"
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
    import common from "../../../util/common";
    let currentDate = new Date();
    let myday = common.getWeek(currentDate.getDay()); //注:0-6对应为星期日到星期六

    export default {
        name: "Field",
        data(){
            return {
                pickerVisible1: "",
                pickerVisible2: "",
            };
        },
        methods:{
            openPicker1() {
                this.$refs.picker1.open();
            },
            openPicker2() {
                this.$refs.picker2.open();
            },
            handleConfirm1(val){

                console.log(val);
                return;

                let confirmDate = new Date(val);
                this.startDates =  confirmDate.getDate();
                this.startMonth =  confirmDate.getMonth() + 1;
                this.startWeek =  "周" + common.getWeek(confirmDate.getDay());
            },
            handleConfirm2(val){
                console.log(val);
                return;
                let confirmDate = new Date(val);
                this.endDates =  confirmDate.getDate();
                this.endMonth =  confirmDate.getMonth() + 1;
                this.endWeek =  "周" + common.getWeek(confirmDate.getDay());
            }
        }
    }
</script>

<style scoped lang="stylus">
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