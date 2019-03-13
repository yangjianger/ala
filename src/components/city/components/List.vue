<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                        <div
                                class="button"
                                @click="handleChangeCity(item.name)"
                        >{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area"
                 v-for="(item, key) of cities"
                 :key="key"
                 :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div
                            v-for="city of item"
                            :key="city.id"
                            class="item border-bottom"
                            @click="handleChangeCity(city.name)"
                    >{{city.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import { mapMutations } from 'vuex'

    export default {
        name: 'List',
        props:{
            cities: Object,
            hotCities: Array,
            letter: String
        },
        methods:{
            handleChangeCity(city){
                //this.$store.dispatch('changeCity', city)
                this.changeCity(city)
                this.$router.push('/')
            },
            ...mapMutations(['changeCity']),
        },
        watch: {
            letter(){
                if(this.letter){
                    this.scroll.scrollToElement(this.$refs[this.letter][0]);
                }

            }
        },
        mounted (){
            this.scroll = new BScroll(this.$refs.wrapper)
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/style/varibles.styl"
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:before
            border-color: #ccc
    .list
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        .title
            line-height: .54rem
            background: #eee
            padding-left: .2rem
            color: #666
            font-size: .26rem
        .button-list
            overflow: hidden
            padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    margin: .1rem
                    padding: .1rem 0
                    text-align: center
                    border: .02rem solid #ccc
                    border-radius: .06rem
        .item-list
            .item
                line-height: .76rem
                padding-left: .2rem
</style>
