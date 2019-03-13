<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
        </div>
        <div
                class="search-content"
                ref="search"
                v-show="keyword"
        >
            <ul>
                <li
                        class="search-item border-bottom"
                        v-for="item of list"
                        :key="item.id"
                        @click="handleChangeCity(item.name)"
                >
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import { mapMutations } from 'vuex'

    export default {
        name: "Search",
        props: {
            cities: Object
        },
        data (){
            return {
                keyword: "",
                timer: null,
                list: []
            }
        },
        methods:{
            handleChangeCity(city){

                // console.log(city);
                //this.$store.dispatch('changeCity', city)
                this.changeCity(city);
                this.$router.push('/')
            },
            ...mapMutations(['changeCity']),
        },
        computed: {
            hasNoData(){
                return !this.list.length
            }
        },
        mounted(){
            this.scroll = new Bscroll(this.$refs.search)
        },
        watch: {
            keyword(){
                if(this.timer){
                    clearTimeout(this.timer)
                }

                if(!this.keyword){
                    this.list = []
                    return;
                }

                this.timer = setTimeout(() => {
                    const result = [];
                    const keyword = this.keyword;
                    for (let i in this.cities) {
                        this.cities[i].forEach((item) => {
                            if(
                                item.spell.indexOf(keyword) > -1 ||
                                item.name.indexOf(keyword) > -1
                            ){
                                result.push(item)
                            }
                        })
                    }

                    this.list = result
                }, 100);
            }
        },
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"
    .search
        height: .72rem
        padding: 0 .1rem
        background: $blueColor
        .search-input
            box-sizing: border-box
            width: 100%
            height: .62rem
            padding: 0 .1rem
            line-height: .62rem
            text-align: center
            border-radius: .06rem
            color: #666
    .search-content
        z-index: 1
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        background: #eee
        .search-item
            line-height: .62rem
            padding-left: .2rem
            background: #fff
            color: #666
</style>