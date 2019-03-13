<template>
    <div class="main">
        <div class="field-item border-bottom field-item-rili">
            <div class="field-left-item field-left-item-serach field-left-item-rili">
                <div class="left-icon">
                    <span class="iconfont">&#xe632;</span>
                </div>
                <div class="left-address left-search left-search-rili date" v-show="isDate">
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
                            v-model="pickerVisible1"
                            type="date"
                            ref="picker2"
                            year-format="{value}"
                            month-format="{value}"
                            date-format="{value} 日"
                            @confirm="handleConfirm2"
                            :startDate="startDate2">
                    </mt-datetime-picker>
                </div>

                <div class="left-address left-search left-search-rili terminal_room" v-show="!isDate">
                    <div class="left-rili-left" @click="openTimePicker1">
                        <div class="terminal_room">
                            <div class="terminal_room_date">
                                <span>{{startMonth}}月</span>
                                <span>{{startDates}}日</span>
                            </div>
                            <div class="terminal_room_week">
                                <span>{{startWeek}}</span>
                                <span>入住</span>
                            </div>
                        </div>
                    </div>
                    <mt-datetime-picker
                            v-model="pickerTimeVisible1"
                            type="date"
                            ref="pickerTime1"
                            year-format="{value}"
                            month-format="{value}"
                            date-format="{value} 日"
                            @confirm="handleTimeConfirm1"
                            :startDate="startDate">
                    </mt-datetime-picker>
                </div>

            </div>
            <div class="field-right-item">
                <div class="user-address-left user-address-left-icon">
                    <span class="iconfont"> > </span>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import common from "../../../util/common";
    import { mapMutations, mapState } from 'vuex'

    let currentDate = new Date();
    let currentTodayDate = new Date(currentDate.getTime() + 86400 * 1000);
    let myday = common.getWeek(currentDate.getDay()); //注:0-6对应为星期日到星期六
    let myday2 = common.getWeek(currentTodayDate.getDay()); //注:0-6对应为星期日到星期六
    export default {
        name: "TimeSelect",
        computed:{
            ...mapState({
                romeType: 'romeType'
            }),
            isDate(){
                let isDate = true;
                if(this.romeType == 1){
                    isDate = true;
                }else{
                    isDate = false;
                }
                return isDate;
            }
        },
        data(){
            return {
                startDate: currentDate,
                startDate2: currentTodayDate,
                startDates: currentDate.getDate(),
                startMonth: currentDate.getMonth() + 1,
                startWeek: "周"+myday,
                endDates: currentTodayDate.getDate(),
                endMonth: currentTodayDate.getMonth() + 1,
                endWeek: "周"+myday2,
                pickerVisible1: "",
                pickerTimeVisible1: "",
            };
        },
        methods:{

            ...mapMutations(['setStartTime', 'setEndTime']),

            openPicker1() {
                this.$refs.picker1.open();
            },
            openPicker2() {
                this.$refs.picker2.open();
            },
            handleConfirm1(val){
                let confirmDate = new Date(val);
                this.startDates =  confirmDate.getDate();
                this.startMonth =  confirmDate.getMonth() + 1;
                this.startWeek =  "周" + common.getWeek(confirmDate.getDay());

                this.setStartTime( (confirmDate.getTime()) );
            },
            handleConfirm2(val){
                let confirmDate = new Date(val);
                this.endDates =  confirmDate.getDate();
                this.endMonth =  confirmDate.getMonth() + 1;
                this.endWeek =  "周" + common.getWeek(confirmDate.getDay());

                this.setEndTime( (confirmDate.getTime()) );
            },

            openTimePicker1() {
                this.$refs.pickerTime1.open();
            },

            handleTimeConfirm1(val){
                let confirmDate = new Date(val);
                this.startDates =  confirmDate.getDate();
                this.startMonth =  confirmDate.getMonth() + 1;
                this.startWeek =  "周" + common.getWeek(confirmDate.getDay());

                this.setStartTime( (confirmDate.getTime()) );
            },
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"
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

    .terminal_room{
        height: 1.28rem;
        display flex;
        flex-direction row;
        justify-content flex-start;
        align-items center;

        .terminal_room_date{
            margin-right .2rem;
            line-height: 1.28rem;
            span{
                color $fontBlackColor;
                font-size .6rem;
            }
        }
        .terminal_room_week{
            span{
                color $grayColor;
                font-size .3rem;
            }
        }
    }

</style>