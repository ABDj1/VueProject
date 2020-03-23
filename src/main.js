import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import dateFilter from "./filters/date.filters";
import store from './store'
import 'materialize-css/dist/js/materialize.min'


Vue.config.productionTip = false

Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');