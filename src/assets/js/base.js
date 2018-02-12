import Vue from "vue";
/* 全局方法 */
// 从对象中获取所需属性
const pick = (obj, arr) => arr.reduce((iter, val) => (val in obj && (iter[val] = obj[val]), iter), {});

// 判断浏览器缓存中是否存在uid
const ifHasUid = () => {
    if (!sessionStorage) {
        alert('该浏览器不支持sessionStorage，无法登陆，请您更换最新版本浏览器')
    } else {
        return sessionStorage.uid ? sessionStorage.uid : false;
    }
}

export default {
    install(Vue) {
        Vue.prototype._pick = pick;
        Vue.prototype.ifHasUid = ifHasUid;
    }
};
