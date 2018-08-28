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
/**
 * 注册一个全局自定义指令 v-ctrlq,按下ctrl+q时执行操作
 * 
 */
Vue.directive('ctrlq', {
    bind:function(el,binding,vnode){
        function documentHandler (e) {
            if (e && e.keyCode==81 && e.ctrlKey){
                if (binding.expression) {
                    binding.value(e);
                }
            }
        }
        el.__ctrlq__ = documentHandler;
        document.addEventListener('keydown',documentHandler);
    },
    unbind:function(el,binding){
        document.removeEventListener('keydown',el.__ctrlq__);
        delete el.__ctrlq__;
    }
})

/**
 * 注册一个全局自定义指令 v-clickoutside,在元素之外点击时执行函数，如点击旁边收起下拉框
 * 
 */
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
