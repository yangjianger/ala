import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

/**
 * 导入vant所有组件
 */
import Vant from 'vant';
Vue.use(Vant);

import axios from 'axios'
Vue.prototype.$axios = axios;

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

import 'vant/lib/index.css'
import '@/assets/style/iconfont/iconfont.css'
import '@/assets/style/border.css'
import '@/assets/style/reset.css'

import animated from 'animate.css'
import store from './store'

Vue.use(animated);

//解决低版本 白屏
import 'babel-polyfill'

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    store,
    components: { App },
    template: '<App/>'
}).$mount('#app');
