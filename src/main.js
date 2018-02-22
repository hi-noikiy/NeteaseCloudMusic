// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
/* mintui框架 */
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);
/* 轮播插件 */
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
/* videojs插件 */
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)
/* axios插件 */
import axios from "axios";
Vue.prototype.$axios = axios;
/* flexible布局插件 */
import "lib-flexible/flexible.js";
var rem = document.getElementsByTagName('html');
// alert(window.devicePixelRatio);
// alert(rem[0].style.fontSize)
// import eruda from "eruda";
// eruda.init();
/* 设置接口地址 */
// import apiUrl from "./api/api.config.js";
// Vue.use(apiUrl);
/* 全局js */
import globaljs from "@/assets/js/base.js";
Vue.use(globaljs);
// 引入vue-cookies
// import cookies from "vue-cookies";
// Vue.use(cookies);
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.filter('singerName', function (value) {
  const arr = [];
  if (value) {
    if (value.length >= 1) {
      value.map(m => {
        arr.push(m.name);
      });
    }
  }

  return arr.join("/");
})

