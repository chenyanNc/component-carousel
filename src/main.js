import Vue from 'vue'
import App from './App.vue'

// 引入组件库
import JscyUI from "@/libs/jscy-ui"



// 挂载
Vue.use(JscyUI)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
