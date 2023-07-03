import Vue from 'vue'
import App from './App.vue'
import yangUi from '@yangjianzhi/yangui-test'
import '@yangjianzhi/yangui-test/yangui.css'

Vue.config.productionTip = false
Vue.use(yangUi);

new Vue({
  render: h => h(App),
}).$mount('#app')
