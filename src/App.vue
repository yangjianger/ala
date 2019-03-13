<template>
  <div id="app">
    <router-view/>
    <div class="buttom" v-if="showTab">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="orders-o" to="/order">订单</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/user">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
    name: 'app',
    data(){
        return {
            active: 0,
        };
    },
    computed:{
        showTab(){
            let showTab = false;
            let paths = this.$route.path;
            if(
                paths == "/user-order" ||
                paths == "/user" ||
                paths == "/order" ||
                paths == "/list" ||
                paths == "/" ||
                paths == "/info"
            ){
                showTab = true;
            }else{
                showTab = false;
            }
            return showTab;
        }
    },
    mounted(){
        if(this.$route.path == "/order" || this.$route.path == "/order-list"){
            this.active = 1;
        }else if(this.$route.path == "/user" || this.$route.path == "/user-order"){
            this.active = 2;
        }
    }
}
</script>

<style scoped>
    .van-tabbar--fixed{
        box-shadow: #aaa 2px 2px 9px;
    }
</style>
