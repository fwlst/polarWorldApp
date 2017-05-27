// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'


import './assets/css/normalize.css'
import './assets/css/animate.css'

/*引入 注冊 mint-ui*/
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data () {
    return {
      // transitionName: 'fadeLeft'
    }
  }
})
