import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './scripts'
import './styles'

// Plugins
import Auth from './plugins/auth'
Vue.use(Auth)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
