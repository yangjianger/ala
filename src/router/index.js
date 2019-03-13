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
import UserOrder from '@/components/user-order/UserOrder'
import UserHotel from '@/components/user-hotel/UserHotel'
import UserAddress from '@/components/user-address/UserAddress'
import UserService from '@/components/user-service/UserService'
import UserComment from '@/components/user-comment/UserComment'
import UserFooter from '@/components/user-footer/UserFooter'
import UserCollect from '@/components/user-collect/UserCollect'
import Login from '@/components/login/Login'
import Common from '@/components/common/Common'
import City from '@/components/city/City'
import Help from '@/components/help/Help'
import About from '@/components/about/About'

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
            path: '/common',
            name: 'Common',
            component: Common
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
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/city',
            name: 'City',
            component: City
        },
        {
            path: '/user-order',
            name: 'UserOrder',
            component: UserOrder
        },
        {
            path: '/user-hotel',
            name: 'UserHotel',
            component: UserHotel
        },
        {
            path: '/user-footer',
            name: 'UserFooter',
            component: UserFooter
        },
        {
            path: '/user-collect',
            name: 'UserCollect',
            component: UserCollect
        },
        {
            path: '/user-comment',
            name: 'UserComment',
            component: UserComment
        },
        {
            path: '/user-address',
            name: 'UserAddress',
            component: UserAddress
        },
        {
            path: '/user-service',
            name: 'UserService',
            component: UserService
        },
        {
            path: '/help',
            name: 'Help',
            component: Help
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
    ],
    //新开页面回到顶部
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})