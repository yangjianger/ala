import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import Order from '@/components/order/Order'
import User from '@/components/user/User'
import List from '@/components/list/List'
import Info from '@/components/info/Info'
import Reserve from '@/components/reserve/Reserve'
import Pay from '@/components/pay/Pay'
import OrderList from '@/components/order-list/OrderList'

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/list',
            name: 'List',
            component: List
        },
        {
            path: '/info/:id',
            name: 'Info',
            component: Info
        },
        {
            path: '/order-list',
            name: 'OrderList',
            component: OrderList
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        },
        {
            path: '/pay',
            name: 'Pay',
            component: Pay
        },
        {
            path: '/reserve',
            name: 'Reserve',
            component: Reserve
        },
        {
            path: '/user',
            name: 'User',
            component: User
        },
    ],
})