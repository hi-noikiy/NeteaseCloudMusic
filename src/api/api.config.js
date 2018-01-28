import Vue from "vue";
/* 接口域名 */
const local = '192.168.1.105';
const dk = "3000";

function apiUrl (api){
    return `${local}:${dk}/${api}`
}
export default {
    install(Vue,options){
        Vue.prototype.apiUrl = apiUrl;
    }
};