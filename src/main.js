import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

/**
 * 导入vant所有组件
 */
import Vant from 'vant';
Vue.use(Vant);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

import 'vant/lib/index.css'
import '@/assets/style/iconfont/iconfont.css'
import '@/assets/style/border.css'
import '@/assets/style/reset.css'

import animated from 'animate.css'

Vue.use(animated);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    // store,
    components: { App },
    template: '<App/>'
}).$mount('#app');
