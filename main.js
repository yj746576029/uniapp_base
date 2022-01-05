import App from './App'
import store from './store'
import configs from './config/app.js'
import Vue from 'vue'

Vue.prototype.$config = configs;
Vue.config.productionTip = false


App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
