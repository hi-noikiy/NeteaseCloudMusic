import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        profile:{}
    },
    mutations: {
        saveLogin(state,preload) {
            state.profile = preload;
        } 
    },
    actions:{
        saveLogin(context,preload) {
            context.commit('saveLogin',preload);      
        } 
    }
})

export default store;