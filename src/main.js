// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/bootstrap-datetimepicker.min.css'
import '@/assets/js/bootstrap.min'
import '@/assets/js/bootstrap-datetimepicker.min'
import '@/assets/js/bootstrap-datetimepicker.zh-CN'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
