import Vue from 'vue'
import App from './App.vue'
// import vueResource from "vue-resource"

Vue.config.productionTip = false
//*使用插件
//!vue1.0用的vue-resource多，使用类似于axios.get/post(url).then(res=>{},err=>{})
// Vue.use(vueResource)

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus=this
  }
}).$mount('#app')
