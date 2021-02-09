import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

import { VueMaskFilter } from 'v-mask'
Vue.filter('VMask', VueMaskFilter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
