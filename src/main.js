import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
// import qs from "qs"
// import axios from "axios";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
