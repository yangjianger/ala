<template>
    <div class="main">
        <van-nav-bar
                title="关于我们"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="wrapper-list pay-help">
            <dl class="list">
                <dd class="dd-padding">
                    <ul>
                        <li>移动支付会通过密钥、安全插件、手机短信验证码、风险控制等技术手段来校验使用者身份，保证您的资金安全。</li>
                        <li>在使用支付时遇到资金盗刷等小概率事件时，第三方支付公司将给予全额赔付。</li>
                    </ul>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>

    export default {
        name: "About",
        data() {
            return {

            };
        },
        methods:{
            onClickLeft(ev){
                this.$router.push('/user');
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"
    .main{
        background-color #f0efed;
    }
    .wrapper-list{
        h4{
            margin: .6rem .2rem .2rem;
            font-size: .34rem;
            font-weight: 400;
        }
        .list{
            border-top: 1px solid #DDD8CE;
            border-bottom: 1px solid #DDD8CE;
            margin-top: .2rem;
            margin-bottom: 0;
            background-color: #fff;
        }
        dl.list{
            padding: .28rem .2rem;
        }
        .dd-padding li{
            list-style: outside disc;
            margin-left: 2em;
            line-height: 1.4;
            margin-top: .1rem;
        }
        .dd-padding li ul li{
            display: list-item;
            text-align: -webkit-match-parent;
        }
    }

</style>