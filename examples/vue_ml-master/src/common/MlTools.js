/**
 * Created by jige on 2016/12/23.
 */
import Vue from 'vue';
import axios from 'axios'
import Tools from './Tools';
const ajaxJsonp = require('jsonp');
const config = require('../../config');

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
 * 公共工具类----业务相关
 */
class MlTools {
    //本地开发端口8888
    static staticUrl = window.location.port == 8888 ? './':config.staticUrl;

    static baseUrl = window.location.port == 8888 ? config.dev.useMock ? '' : '/api' :config.baseUrl;

    /**
     * 退出账户时，删除当前账户下保存的cookie
     */
    static delUser() {
        Tools.delCookie('userId');
        Tools.delCookie('userName');
        Tools.delCookie('JSESSIONID');
        Tools.delCookie('rememberMe');
    }
    /**
     * 封装全局ajax
     * @param param
     * handleError: 是否默认处理错误消息
     */
    static ajax({
        url,
        data,
        type = 'get',
        handleError = true,
        success = noop,
        error = noop
    }) {
        const params = {
            method: type,
            url: this.baseUrl + url
        }
        
        if (type === 'post') params.data = data
        
        return axios(params)
            .then((res) => {
                success(res.data)
            
                if (res.data.stateCode !== 200 && handleError) {
                    window.mlApp.$message({
                        message: res.data.message || res.data.msg,
                        type: 'error'
                    })
                } else {
                    return res.data
                }
            }).catch((err) => {
                error(err.data);
                window.mlApp.$message({
                    message: '😓服务器端错误！',
                    type: 'error'
                })
                return err.data
          })
    }
    /**
     * 跨域请求
     * jsonp方式
     * utils.MlTools.jsonp({
     *   url: 'http://p.3.cn/prices/mgets',
     *   data: { id: 'J_954086'},
     *   success(data){},
     *   error(err){}
     * })
     */
    static jsonp(opts){
        let url = opts.url;
        if(opts.hasOwnProperty('data') && !Tools.isEmpty(opts.data)){
            let params = [];
            for(let key in opts.data){
                params.push(key +'=' +opts.data[key])
            }
           url += '?'+params.join('&');
        }
        ajaxJsonp(url, null, (err, data) => {
            if (err) {
                opts.error(err)
            } else {
                opts.success(data)
            }
        });
    }
}

export default MlTools;
