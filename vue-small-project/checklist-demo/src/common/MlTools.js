/**
 * Created by jige on 2016/12/23.
 */
import Vue from 'vue';
import axios from 'axios'
import Tools from './Tools';


/**
 * 注册一个全局自定义指令 v-focus
 */
Vue.directive('focus', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
})

Vue.directive('clickoutside',{
    bind:function (el, binding, vnode) {
        function documentHandler (e){
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value(e);
            }
        }
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click',documentHandler);
    },
    unbind: function (el, binding){
        document.removeEventListener('click',el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
})
/**
 * 公共工具类----业务相关
 */
class MlTools {
    /**
     * 封装全局ajax
     * @param param
     */
    static ajax(param) {
        if (param.type === 'post') {
            axios({
                method: 'post',
                url: param.url,
                data:param.data
            }).then((res) => {
                const result = typeof(res.data) =='object' ? res.data : JSON.parse(res.data);
                param.success(result);
            }, (err) => {
                const error = typeof(err.data) =='object' ? err.data : JSON.parse(err.data);
                param.error(error.message);
            })
        } else if (param.type === 'get') {
            axios({
                method: 'get',
                url:param.url
            }).then((res) => {
                const result = typeof(res.data) =='object' ? res.data : JSON.parse(res.data);
                param.success(result);
            }, (err) => {
                const error = typeof(err.data) =='object' ? err.data : JSON.parse(err.data);
                param.error(error);
            })
        }
    }
}

export default MlTools;
