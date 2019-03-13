<template>
    <ul class="list">
        <li
                v-for="letter of letters"
                :key="letter"
                class="item"
                @click="handleClick"
                :ref="letter"
                @touchstart.prevent="handleTouchStart"
                @touchmove="handleTouchMove"
                @touchend="handleTouchEnd"
        >
            {{letter}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Alphabet",
        props:{
            cities: Object,
        },
        data(){
            return {
                timer: null,
                startY: 0,
                touchStatus: false
            }
        },
        computed:{
            letters(){
                const letters_list = [];
                for (let i in this.cities) {
                    letters_list.push(i)
                }
                return letters_list
            },
        },
        updated(){
            this.startY =  this.$refs['A'][0].offsetTop;
        },
        methods:{
            handleClick(e){
                //向上触发事件
                this.$emit("change", e.target.innerText)
            },

            handleTouchStart () {
                this.touchStatus = true
            },
            handleTouchMove (e) {

                if(this.touchStatus) {
                    if(this.timer){
                        clearTimeout(this.timer)
                    }

                    //函数节流
                    this.timer = setTimeout(() => {
                        const touchY = e.touches[0].clientY  - 79;
                        const index = Math.floor((touchY - this.startY) / 20);

                        if(index >= 0 && index < this.letters.length){
                            this.$emit("change", this.letters[index])
                        }
                    }, 16);
                }
            },
            handleTouchEnd () {
                this.touchStatus = false
            },
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/style/varibles.styl"
    .list
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute
        top: 1.58rem
        right: 0
        bottom: 0
        width: .4rem
        .item
            line-height: .4rem
            text-align: center
            color: $grayColor
</style>