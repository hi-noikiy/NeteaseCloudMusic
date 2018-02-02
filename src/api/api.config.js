import Vue from "vue";
/* 接口域名 */
const ip = '192.168.31.75';
const dk = "3000";
let api = `${ip}:${dk}`;
console.log(api)
export default {
    install(Vue){
        Vue.prototype.apiUrl = api;
    }
};