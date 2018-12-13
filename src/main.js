import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'normalize.css'
import './assets/reset.scss'

Vue.config.productionTip = false
//使用element-ui
Vue.use(ElementUI)
/* eslint-disable no-new */

Vue.component('dan', {
  template:'<div>hello my name is {{name}}</div>',
  data(){
    return{
      name:'dan'
    }
  }
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
