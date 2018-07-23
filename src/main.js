// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



// rem font-size
function recalc() {
  var deviceWidth = document.documentElement.clientWidth||window.innerWidth;
      document.documentElement.style.fontSize = deviceWidth + 'px';

}
function initRecalc() {
  recalc();
  var resizeEvt = 'osrientationchange' in window ? 'orientationchange' : 'resize';
  if (!document.addEventListener) return;
  window.addEventListener(resizeEvt, recalc, false);
  document.addEventListener('DOMContentLoaded', recalc, false);
}
initRecalc();