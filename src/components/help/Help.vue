<template>
    <div class="main">
        <van-nav-bar
                title="帮助中心"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="wrapper-list pay-help">
            <h4>1. 支付安全问题如何保证？</h4>
            <dl class="list"><dd class="dd-padding">
                <ul>
                    <li>移动支付会通过密钥、安全插件、手机短信验证码、风险控制等技术手段来校验使用者身份，保证您的资金安全。</li>
                    <li>在使用支付时遇到资金盗刷等小概率事件时，第三方支付公司将给予全额赔付。</li>
                </ul>
            </dd></dl>

            <h4>2. 支付时遇到问题？</h4>
            <dl class="list"><dd class="dd-padding">
                <ul class="pay-problem">
                    <li>储蓄卡支付提示账号已注册或让用户使用支付宝
                        <ul><li>储蓄卡部分使用的是支付宝的支付通道。如果您是支付宝的实名认证用户，会提示您使用支付宝支付。如果您不想使用支付宝支付或忘记了支付宝账号，建议您使用微信支付或银联支付再尝试下。</li></ul>
                    </li>
                    <li>支付过程中跳转失败或者提示系统繁忙、初始化失败等错误
                        <ul><li>此问题是由于网络不稳定或者第三方支付不稳定导致，建议您更换一种支付方式进行尝试。您还可以点击“更多”—“意见反馈”向我们反馈您遇到的问题，会安排技术人员进行排查。</li></ul>
                    </li>
                    <li>支付过程中提示银行预留手机号不正确
                        <ul><li>请确认您填写的手机号码是办理银行卡时填写的手机号码。若不能确定，建议您拨打该银行客服电话进行咨询或者直接去营业厅咨询。</li></ul>
                    </li>
                    <li>支付过程中收不到短信验证码
                        <ul><li>首先请您核实所填写的手机号是否正确，如果手机号没有问题，很可能是由于短信运营商通道不太稳定导致，请您耐心等待或者拨打您所选用支付方式的客服电话进行咨询。</li></ul>
                    </li>
                </ul>
            </dd></dl>

            <h4>3. 购买后不满意，如何退款？</h4>
            <dl class="list"><dd class="dd-padding">
                <ul>
                    <li>首先请确认已购买的团购单是否支持退款。</li>
                    <li>如果支持退款，请在“已付款订单”中找到此订单，打开订单详情，点击底部的“申请退款”，即可进行退款操作。退款后，部分单子支持立即到账，其他的可以通过点击“查看详情”查询到退款进度。</li>
                    <li>不支持随时退与过期退的团购单，则无法进行退款。</li>
                </ul>
            </dd></dl>

            <h4>4. 已退款的订单，如何取消退款？</h4>
            <dl class="list"><dd class="dd-padding">
                <ul>
                    <li>请在“已付款订单“中找到退款中的订单。</li>
                    <li>若订单状态为其他，则无法进行取消退款操作。</li>
                </ul>
            </dd></dl>

            <div class="btn-wrapper"><h2>阿拉思家客服电话：<a href="tel:暂无">暂无</a></h2></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Help",
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