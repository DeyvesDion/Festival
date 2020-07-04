import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import VModal from 'vue-js-modal'
import swal from 'sweetalert';
import Vuelidate from 'vuelidate'
Vue.use(VModal)
Vue.use(Vuelidate)
// Vue.use(swal)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
