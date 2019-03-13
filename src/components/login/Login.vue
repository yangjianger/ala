<template>
    <div class="main">
        <div class="top">
            <img src="./imgs/ala-slogin.png" alt="">
        </div>
        <div class="input border">
            <div class="item username border-bottom">
                <span class="iconfont">&#xe636;</span>
                <span class=""><input type="text" v-model="username" placeholder="姓名"></span>
            </div>
            <div class="item tel border-bottom">
                <span class="iconfont">&#xe64f;</span>
                <span class="tel"><input class="tel-input" type="tel" v-model="tel" placeholder="手机号"></span>
                <span class="click-tel" @click="sendTel">{{getCodeMsg}}</span>
            </div>
            <div class="item code">
                <span class="iconfont">&#xe616;</span>
                <span class=""><input type="text" v-model="code" placeholder="输入验证码"></span>
            </div>
        </div>
        <div class="bottom">
            <div class="submit" @click="submit">
                <span>登录</span>
            </div>
            <div class="desc">
                <span>微信快速登录</span>
            </div>
        </div>
    </div>
</template>

<script>
    import common from "@/util/common";
    import { mapMutations, mapState } from 'vuex'

    export default {
        name: "Login",
        computed:{
            ...mapState({
                userInfo: 'userInfo'
            }),
        },

        mounted(){
            if(this.userInfo.user_id){
                this.$router.push('/');
            }
        },

        data(){
            return {
                username: "",
                tel: "",
                code: "",
                getCodeMsg: "获取验证码",
                hasClick: true,
                hasSubmit: true,
            };
        },
        methods: {

            ...mapMutations(['setUserInfo']),

            checkTel(tel){
                if(!tel){
                    this.$dialog.alert({
                        message: '请输入手机号~'
                    }).then(() => {
                        // on close
                    });
                    return false;
                }

                if(!common.checkTel(tel)){
                    this.$dialog.alert({
                        message: '请输入正确的手机号~'
                    }).then(() => {
                        // on close
                    });
                    return false;
                }

                return true;
            },

            sendTel(){
                let tel = this.tel.trim();

                if(!this.checkTel(tel)){
                    return false;
                }

                if(!this.hasClick){
                    return ;
                }

                let that = this;
                if(this.hasClick){
                    this.hasClick = false;
                    let timer = null;
                    let msg = "s后重试";
                    let nums = 60;
                    clearTimeout(timer);

                    this.$axios.get('/index.php?r=api/user/get-code', {
                        params: {
                            tel: this.tel.trim()
                        }
                    }).then(function(res){
                        that.$dialog.alert({
                            message: '发送成功~'
                        }).then(() => {
                            // on close
                        });
                    });

                    timer = setInterval(function(){
                        let msgs = nums + ' ' + msg;
                        that.getCodeMsg = msgs;
                        nums--;
                        if(nums < 0){
                            that.hasClick = true;
                            that.getCodeMsg = "获取验证码";
                            clearTimeout(timer);
                        }

                    }, 1000);
                }
            },

            //登录
            submit(){

                if(!this.hasSubmit){
                    return ;
                }

                this.hasSubmit = false;

                let tel = this.tel.trim();
                let username = this.username.trim();
                let code = this.code.trim();
                let that = this;

                if(!this.checkTel(tel)){
                    return false;
                }

                if(!username){
                    this.$dialog.alert({
                        message: '请输入正确的用户名~'
                    }).then(() => {
                        // on close
                    });
                    return false;
                }

                if(!code){
                    this.$dialog.alert({
                        message: '请输入正确的验证码~'
                    }).then(() => {
                        // on close
                    });
                    return false;
                }



                this.$axios.get('/index.php?r=api/user/login', {
                    params: {
                        tel: this.tel.trim(),
                        username: this.username.trim(),
                        code: this.code.trim(),
                    }
                }).then(this.handleLoginDataSucc).catch(error=>{
                    that.$dialog.alert({
                        message: "请求错误，请稍后再试"
                    }).then(() => { });

                    that.hasSubmit = true;

                });
            },

            handleLoginDataSucc(res){
                if(res.status != 200){
                    this.$dialog.alert({
                        message: "请求错误，请稍后再试"
                    }).then(() => { });
                }
                let data = res.data;
                if(data.resultCode < 0){
                    this.$dialog.alert({
                        message: data.errorMsg
                    }).then(() => { });
                }else{
                    this.$dialog.alert({
                        message: data.errorMsg
                    }).then(() => { });

                    this.setUserInfo(data.result);

                    this.$router.push('/');
                }

                that.hasSubmit = true;
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"

    .main{
        background-color $bgGrayColor;
        min-height 9.4rem;
        padding 1.5rem .3rem;
    }

    .border-bottom::before{
        border-color $borderGrayColor;
    }

    .top{
        img{
            display block;
            width: 120px;
            height: 120px;
            margin 0 auto;
        }
    }

    .input{
        background-color #ffffff;
        padding .15rem;
        line-height: 0.8rem;
        font-size .34rem;
        border-radius: .2rem;
    }

    .item{
        padding .2rem;
        display flex;
        flex-direction row;
        justify-content flex-start;
        position relative;
        span{
            display block;
        }

        .iconfont{
            font-size: .48rem;
            color $grayColor;
            margin-right .2rem;
        }

        .click-tel{
            right .2rem;
            position absolute;
            color $grayDoColor;
            font-size: .3rem;
        }
        .tel{
            width: 3.4rem;
        }

        .tel-input{
            width:100%;
            border-right: 1px solid $borderGrayColor;
        }
    }

    .bottom{
        margin-top 1.2rem;
        padding .2rem;
        display flex;
        flex-direction column;
        justify-content center;
        align-items center;

        .submit{
            font-size .36rem;
            width 6rem;
            text-align center;
            padding .3rem;
            border-radius .2rem;
            background-color $blueBgColor2;
            box-shadow 1px 1px 1px $blueBgColor2;
            color #ffffff;
        }

        .desc{
            margin-top .4rem;
            color $grayColor;
        }
    }

</style>