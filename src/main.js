import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import '@/assets/css/index.scss'

Vue.config.productionTip = false
fastClick.attach(document.body)
if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
