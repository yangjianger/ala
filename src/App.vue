<template>
  <div id="app">
    <router-view/>
    <div class="buttom">
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
}
</script>

<style scoped>
    .van-tabbar--fixed{
        box-shadow: #aaa 2px 2px 9px;
    }
</style>
