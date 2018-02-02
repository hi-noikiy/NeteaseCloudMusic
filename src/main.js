// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)

import axios from "axios";
Vue.prototype.$axios = axios;

import "lib-flexible/flexible.js";
var rem = document.getElementsByTagName('html');
// alert(window.devicePixelRatio);
// alert(rem[0].style.fontSize)
// import eruda from "eruda";
// eruda.init();

import apiUrl from "./api/api.config.js";
Vue.use(apiUrl);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
