import Vue from "vue";
/* 全局方法 */
const pick = (obj, arr) => arr.reduce((iter, val) => (val in obj && (iter[val] = obj[val]), iter), {});
export default {
    install(Vue) {
        Vue.prototype._pick = pick;
    }
};