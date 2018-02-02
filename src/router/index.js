import Vue from 'vue'
import Router from 'vue-router'

import index from "@/components/index";
import findMusic from '@/pages/findMusic/findMusic';
import music from "@/pages/findMusic/music/music";
import mv from "@/pages/findMusic/mv/mv";
import account from "@/pages/account/account"
import musicList from "@/pages/musicList/musicList"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/findmusic/music"
    },
    {
      path: "/",
      component: index,
      children: [
        {
          path: 'findmusic', component: findMusic,
          children: [{ path: 'music', component: music }, { path: 'mv', component: mv }, { path: 'radio', component: music }]
        },
        { path: 'minemusic', component: account },
        { path: 'friend', component: account },
        { path: 'account', component: account },
        { path: 'musiclist/:musicListId', component: musicList },        
      ]
    },
  ],
  linkActiveClass: 'active'
})
