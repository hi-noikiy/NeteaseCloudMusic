import Vue from 'vue'
import Router from 'vue-router'

import findMusic from '@/pages/findMusic/findMusic';
import music from "@/pages/findMusic/music/music";
import mv from "@/pages/findMusic/mv/mv";
import minemusic from "@/pages/minemusic/minemusic";
import account from "@/pages/account/account";
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
      children: [{ path: 'music', component: music }, { path: 'mv', component: mv }, { path: 'radio', component: music }]
    },
    {
      path: '/minemusic',
      components: { default: minemusic, tabbar: tabbar },
    },
    {
      path: '/friend',
      components: { default: account, tabbar: tabbar },
    },
    {
      path: '/account',
      components: { default: account, tabbar: tabbar },
    },
    { path: '/musiclist/:musicListId', components: { default: musicList, tabbar: tabbar } },
    { path: '/login', component:login},
    { path: '/loginform', component:loginForm},
  ],
  linkActiveClass: 'active'
})
