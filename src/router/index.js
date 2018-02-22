import Vue from 'vue'
import Router from 'vue-router'

import findMusic from '@/pages/findMusic/findMusic';
import musicPages from "@/pages/findMusic/music/music";
import mvPages from "@/pages/findMusic/mv/mv";
import minemusic from "@/pages/minemusic/minemusic";
import friend from "@/pages/friend/friend";
import account from "@/pages/account/account";
import music from "@/pages/music/music";
import musicList from "@/pages/musicList/musicList";
import tabbar from "utils/tabbar/tabbar";
import login from "pages/login/login";
import loginForm from "pages/loginForm/loginForm";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/findmusic/music"
    },
    {
      path: "/findmusic",
      components: {
        default: findMusic,
        tabbar: tabbar,
      },
      children: [{ path: 'music', component: musicPages }, { path: 'mv', component: mvPages }, { path: 'radio', component: musicPages }]
    },
    {
      path: '/minemusic',
      components: { default: minemusic, tabbar: tabbar },
    },
    {
      path: '/friend',
      components: { default: friend, tabbar: tabbar },
    },
    {
      path: '/account',
      components: { default: account, tabbar: tabbar },
    },
    { path: '/musiclist/:musicListId', components: { default: musicList, tabbar: tabbar } },
    // { path: '/music/:musicId', component: music },

    { path: '/login', component: login },
    { path: '/loginform', component: loginForm },
  ],
  linkActiveClass: 'active'
})
