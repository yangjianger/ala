<template>
    <div class="main">
        <van-nav-bar
                title="我的点评"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <div class="comment border-bottom" v-for="item in commentList" :key="item.id">
                <div class="icon">
                    <span class="iconfont">&#xe67e;</span>
                </div>
                <div class="comment-content">
                    <span class="title">评论内容</span>
                    <span class="date">{{item.date}}</span>
                    <span class="content content-link">{{item.content}}</span>
                    <router-link :to="'/info/' + item.hotelId">
                        <span class="link content-link">查看详情</span>
                    </router-link>
                </div>
            </div>
        </van-list>

    </div>
</template>

<script>
    export default {
        name: "UserComment",
        data() {
            return {
                hasList: true,
                loading: false,
                offset: "600",
                finished: false,
                commentList: [
                    {
                        id:1,
                        hotelId: 6,
                        content: "哈哈哈哈，很好的",
                        date: "2019-01-12 10:10:12",
                    },
                    {
                        id:2,
                        hotelId: 6,
                        content: "嘻嘻嘻嘻，很好的",
                        date: "2019-01-12 10:11:12",
                    },
                    {
                        id:3,
                        hotelId: 6,
                        content: "嗯嗯嗯嗯，很好的",
                        date: "2019-01-12 10:12:12",
                    },
                    {
                        id:4,
                        hotelId: 6,
                        content: "哦哦哦哦哦，很好的",
                        date: "2019-01-12 10:13:12",
                    },
                ],

            };
        },
        methods:{
            onClickLeft(ev){
                this.$router.push('/user');
            },
            onLoad() {

            },

        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"
    .comment{
        display flex;
        flex-direction row;
        align-items flex-start;
        padding .2rem
        .icon{
            margin-right .4rem;
            padding-top: .06rem;
            .iconfont{
                color $blueColor;
            }
        }

        .comment-content{
            display flex;
            flex-direction column
            justify-content flex-start;
            span{
                padding .06rem 0;
                display block
                font-size .28rem;
            }

            .title{
                font-size .32rem;
                font-weight 800;
            }

            .date{
                color $grayColor
            }

            .content-link{
                margin-top .2rem;
            }

            .link{
                color $blueColor
            }
        }
    }



</style>