import Vue from 'vue'
import App from './App.vue'
import 'bulma'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/styles/helpers.css'
import '@/assets/styles/grid.css'
// import '@/assets/styles/debug.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
