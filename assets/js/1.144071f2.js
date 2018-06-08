(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{149:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._m(1),n("blockquote",[n("p",[t._v("借鉴这篇回答："),n("a",{attrs:{href:"https://segmentfault.com/q/1010000012065855",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何使用localStorage结合Vuex来保存用户登录信息?"),n("OutboundLink")],1)])]),n("p",[t._v("遇到问题——当时是期待根据localStorage中的值的改变在计算属性中随时得到新的值。事实上。vue中的值并不会因为localStorage中值的改变而变化的，触发不了。所以完美的办法就是所有和localStorage相关的都在vuex中处理，这样状态就可以实时改变了。")]),n("p",[t._v("当时我的问题是——我想每次进入页面后检测现在localStorage中是否有登录的信息，有的话就从localStorage中取，没有的话从vuex中取，这步其实就是等待登录后拿到值，然后在我退出登录时，我清空localStorage里面的值，此时就不能进行一些操作或者一些显示。。。。我是在计算属性中获取的。")]),n("p",[t._v("后来借鉴上文的回答，一进入页面触发vuex，去把localStorage中的值给vuex中的状态值，然后在组件中只是用状态值就行。所有localStorage的设置值和移除值均在vuex中完成。")]),n("p",[t._v("整个处理方式就是这样的，很重要，要记住。由于项目在后面改变了方式，所以我又改变了不再使用localStorage来储存值了。")]),t._m(2),t._m(3),n("p",[t._v("问题分析： 一个计算属性，如果没有设置 setter,也就是传入的是一个函数，或者传入的对象里没有 set 属性，当你尝试直接该改变这个这个计算属性的值，都会报这个错误。")]),n("p",[t._v("在此项目中，我写了:")]),t._m(4),n("p",[t._v("所以更改为以下：")]),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),n("p",[t._v("在vuex的action里面的请求要写成promise的形式。举例如我所做的logout。事实上登录的很多状态我也可以不在vuex里面维护的，没有必要，一开始不明白这个道理：")]),t._m(12),n("p",[t._v("在vuex中维护：")]),t._m(13),n("p",[t._v("重点就想说明在actions中resolve()之后，在vue组件的then之后即为退出成功的处理了。")]),t._m(14),n("p",[t._v("初始化data之后，要在请求中对这个数进行赋值，那么不能在computed中初始化，比如将这个数组的每一个元素都初始化为0；")]),t._m(15),t._m(16),n("p",[t._v("####（1）一进入页面触发定时器定时发起请求")]),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),n("p",[t._v("vue本身起的项目一般为http://localhost:8080,也就是http://localhost:8080/index.html，我们的项目如果是简单的vue单页面应用的话，其本身就只有一个页面——index.html。而路由页就相当于加了几个hash切换，通过js动态加载其他几个页面的，所以其其实是http://localhost:8080/index.html/#/index，http://localhost:8080/index.html/#/list。")]),n("p",[t._v("同时在服务器上，真实的页面也就只有index.html,所以使用vue-router的mode:history模式就有问题了（这个原理嘛。。。）官网上有处理办法，后端要配合进行配置才可以。")]),n("blockquote",[n("p",[t._v("(官网上)"),n("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/history-mode.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML5 History 模式"),n("OutboundLink")],1),t._v("\nvue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。\n如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。")]),t._m(31),n("p",[t._v("当你使用 history 模式时，URL 就像正常的 url，例如 http://yoursite.com/user/id，也好看！\n不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 http://oursite.com/user/id 就会返回 404，这就不好看了。\n所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。\n图片名字也都需要小写。")])]),t._m(32),n("p",[t._v("本项目中要求在未登录之前，不能进入别的路由页，所以设置全局钩子：")]),t._m(33),n("p",[t._v("官网上————"),n("a",{attrs:{href:"https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%AE%88%E5%8D%AB",target:"_blank",rel:"noopener noreferrer"}},[t._v("导航守卫"),n("OutboundLink")],1)]),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),n("p",[t._v("聚集时改变type：")]),t._m(41),t._m(42),t._m(43),t._m(44),t._m(45),t._m(46),t._m(47),n("p",[t._v("在webpack.dev.conf.js中：")]),t._m(48),n("p",[t._v("同时生产环境中，在webpack.prod.conf.js中：")]),t._m(49),t._m(50),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/bright2017/article/details/77850525",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue2.0做的项目在IE11下面打开一片空白？"),n("OutboundLink")],1)]),n("p",[t._v("安装 \"babel-polyfill\" 即可。\n在入口main.js文件引入：import 'babel-polyfill'\n在webpack.base.conf.js中，")]),t._m(51),t._m(52),n("p",[t._v("（https://blog.csdn.net/csdn_yudong/article/details/78332665）\n因为 Vue.js 使用了 IE8 不能模拟的 ECMAScript 5 特性。")]),n("p",[t._v("但具体是哪些特性呢？")]),t._m(53),t._m(54),n("p",[t._v("只要在script中的都需要用require()的格式加载图片")]),t._m(55)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"第一次与vue亲密接触的挖坑和填坑之路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一次与vue亲密接触的挖坑和填坑之路","aria-hidden":"true"}},[this._v("#")]),this._v(" 第一次与vue亲密接触的挖坑和填坑之路")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-vuex以及本地存储localstorage如何实现登录之后在刷新的时候登录状态仍然在。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-vuex以及本地存储localstorage如何实现登录之后在刷新的时候登录状态仍然在。","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. vuex以及本地存储localStorage如何实现登录之后在刷新的时候登录状态仍然在。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("//一进入页面\ncreated(){\n    this.getLocalData();\n},\nmethods:{\n\t...mapActions({\n\t    getLocalData:'getLocalData',\n\t}),\n}\n//vuex中\ngetLocalData({commit}){\n    commit(types.GET_LOCALDATA);\n},\n\n[types.GET_LOCALDATA] (state){\n    if(localStorage.id)\n\t\tstate.sfz = localStorage.sfz;\n\t\tstate.user = localStorage.id;\n\t\tstate.pwd = localStorage.pwd;\n\t\tstate.loginFlag = false;\n\t}\n\t\n},\n//退出登录\n[types.LOGIN_OUT] (state){\n\tlocalStorage.removeItem('id');\n\tlocalStorage.removeItem('sfz');\n\tlocalStorage.removeItem('pwd');\n\tstate.user = '';\n\tstate.sfz ='';\n\tstate.pwd ='';\n\tstate.loginFlag = true;\n\t\n},\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-computed-property-digitalcert-was-assigned-to-but-it-has-no-setter-报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-computed-property-digitalcert-was-assigned-to-but-it-has-no-setter-报错","aria-hidden":"true"}},[this._v("#")]),this._v(' 2. Computed property "digitalCert" was assigned to but it has no setter 报错')])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("mounted() {\nvar _this = this;\ndocument.onkeydown=function(e) {\n    if(e && e.keyCode==81 && e.ctrlKey ){   //同时按下ctrl+q\n        _this.digitalCert = false;   \n}\n           \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("computed:{\n    digitalCert:{\n        get:function(){\n            return this.$store.state.login.digitalCert;\n        },\n        set:function(newValue){\n            this.$store.state.login.digitalCert = newValue;\n        }\n    }\n},\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-在引入mapstate的计算属性时，怎么写普通的计算属性，以及设置getter和setter的计算属性："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-在引入mapstate的计算属性时，怎么写普通的计算属性，以及设置getter和setter的计算属性：","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.### 在引入mapState的计算属性时，怎么写普通的计算属性，以及设置getter和setter的计算属性：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("有getter和setter")]),this._v("：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("computed:{\n    digitalCert:{\n        get:function(){\n            return this.$store.state.login.digitalCert;\n        },\n        set:function(newValue){\n            this.$store.state.login.digitalCert = newValue;\n        }\n    },\n    ...mapState({\n        loginBoxFlag: state => state.login.loginBoxshow,\n        tipsTxt: state => state.login.tipsTxt,\n    }),\n},\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("普通计算属性")]),this._v("：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("// mapState 辅助函数帮助我们生成计算属\ncomputed: mapState({\n    // 箭头函数可使代码更简练\n    count: state => state.count,\n    // 传字符串参数 'count' 等同于 'state => state.count'\n    countAlias: 'count',\n    // 为了能使用 'this'获取局部状态，必须使用常规函数\n    countPlusLocalState (state) {\n        return state.count + this.localCount\n    },\n    // 常规 computed, 没有使用 store的状态\n    localCountAlias () {\n        return this.localCount\n    }\n})\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-vuex中的请求写成promise格式的好处。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-vuex中的请求写成promise格式的好处。","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.vuex中的请求写成promise格式的好处。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("//在header.vue中点击按钮触发logout方法\nlogout() {\n\tlet _this  = this;\n\tthis.$confirm('你确定要注销登录吗?', '提示', {\n  \t\tconfirmButtonText: '确定',\n  \t\tcancelButtonText: '取消',\n  \t\ttype: 'warning'\n    }).then(() => {\n    \t_this.$store.dispatch('loginOut')\n    }).then(() =>{\n    \t_this.searchValue = '';//就可以这样清除本组件中的值，不需要去vuex中实现\n    \t_this.$message({\n\t\t  \ttype: 'success',\n\t\t  \tmessage: '你已经成功退出登录'\n\t\t});\n    }).catch((e) => {\n      \tthis.$message({\n        \ttype: 'info',\n       \t\tmessage: '已取消注销登录'\n      \t});          \n    });\n  }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("//actions中：\nloginOut:({dispatch,commit})=> {\n\treturn new Promise((resolve, reject) => {\n\t\tutils.MlTools.ajax({\n    \t\ttype:'get',\n    \t\turl:'/qbeq/userLogOut',\n    \t\tsuccess:function(datas){\n    \t\t\tif(datas.code){\n\t\t\t\t\tcommit(types.LOGIN_OUT)\n\t\t\t\t\tresolve(datas)\n    \t\t\t}\n    \t\t\t\t\n    \t\t},\n    \t\terror:function(res){\n    \t\t\tconsole.log(res)\n    \t\t\treject(datas)\n    \t\t}\n    \t})\n\t\t\n\t})\n}\n\n//在mutations中：\n[types.LOGIN_OUT] (state){\n\tstate.user = '';\n\tstate.sfz ='';\n\tstate.pwd ='';\n\tstate.loginFlag = true;\n\t\n},\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_5-数组初始化在data中而非在computed中；数组的更新必须vue-set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-数组初始化在data中而非在computed中；数组的更新必须vue-set","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. 数组初始化在data中而非在computed中；数组的更新必须vue.set")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('data (){\n    return {\n        trendValueIn:new Array(10).join(",").split(",").map((item,index) => {return 0;}),\n        trendValueOut:new Array(10).join(",").split(",").map((item,index) => {return 0;}),\n    }\n   \n},\ncomputed:{\n    // trendValueIn(){\n    //     return new Array(10).join(",").split(",").map((item,index) => {return 0;})\n    // },\n    // trendValueOut(){\n    //     return new Array(10).join(",").split(",").map((item,index) => {return 0;})\n    // },\n},\ncreated(){\n    this.reqRrendValue()\n},\nmethods:{\n    reqRrendValue(){\n        let _this = this;\n        this.utils.MlTools.ajax({\n            url: \'/qbeq/keyperson\',\n            type: \'post\',\n            data: {},\n            success(data){\n                _this.createdtable(data.currDay);\n                _this.drawLine(data.totalDay);\n            },\n            error(err){\n                reject(err.message)\n            }\n        })\n    },\n    createdtable(data){\n        let _this = this;\n        \n        //今日流入\n        let todayDataIn = data.filter((n,m) => {\n            if(n.flag == 1){\n                return n;\n            }\n        })\n        //今日流出\n        let todayDataOut = data.filter((n,m) => {\n            if(n.flag == 0){\n                return n;\n            }\n        })\n        //总共的\n        let totalIn = 0,totalOut = 0;\n        todayDataIn.forEach((item,index) => {\n            let i = _this.theader.findIndex((value,index) => {\n                return value == item.type;\n            })\n            totalIn += item.num; \n            // _this.trendValueIn[i] = item.num;\n            _this.$set(_this.trendValueIn,i-1,item.num)//更新数组需要使用vue.set\n        })\n        _this.$set(_this.trendValueIn,9,totalIn)\n    \n        todayDataOut.forEach((item,index) => {\n            let i = _this.theader.findIndex((value,index) => {\n                return value == item.type;\n            })\n            totalOut += item.num; \n            // _this.trendValueOut[i] = item.num;\n            _this.$set(_this.trendValueOut,i-1,item.num)//更新数组需要使用vue.set\n        })\n        _this.$set(_this.trendValueOut,9,totalOut)\n    },\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_6-vue中定时器的处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-vue中定时器的处理","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. vue中定时器的处理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("mounted(){\n    let _this = this;\n    let timeInterval = 10000;//10s\n    this.$nextTick(function(){\n        _this.timer = setInterval(function(){\n            // console.log(new Date())\n            _this.reqRrendValue()\n\n        },timeInterval)\n        \n    })\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_2-离开此标签页的时候，清除定时器，返回此标签页时再启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-离开此标签页的时候，清除定时器，返回此标签页时再启动","aria-hidden":"true"}},[this._v("#")]),this._v(" (2) 离开此标签页的时候，清除定时器，返回此标签页时再启动")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("监测 "),e("code",[this._v("visibilitychange")]),this._v("事件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('mounted(){\n\n    window.addEventListener("visibilitychange",()=>{\n        // debugger;\n        if(document.hidden){\n            console.log("我暂时离开页面了");\n            clearInterval(_this.timer);\n        }else{\n            _this.timer = setInterval(function(){\n                // console.log(new Date())\n                _this.reqRrendValue()\n\n            },timeInterval)\n        }\n        \n   })\n    \n},\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"（3）-在可视区域时启动定时器，不在时清除定时请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（3）-在可视区域时启动定时器，不在时清除定时请求","aria-hidden":"true"}},[this._v("#")]),this._v(" （3） 在可视区域时启动定时器，不在时清除定时请求")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('let _this = this;\nlet timeInterval = 10*1000;//10s\n\n// 由于我的定时器在一进入页面的时候，不在可视区域内，所以不用启动定时器，这块存在无作用\n//this.$nextTick(function(){\n//     if(isElementInViewport(document.getElementsByClassName("trend")[0])){\n//             _this.timer = setInterval(function(){\n//                 console.log(11111)\n//                 console.log(new Date())\n//                 _this.reqRrendValue()\n\n//             },timeInterval) \n//         }else{\n//             console.log("不在可视区域，清除定时请求");\n//             clearInterval(_this.timer);\n//         }\n    \n// })\n\nwindow.addEventListener("visibilitychange",() => {\n    clearInterval(_this.timer);\n    if(document.hidden){\n        console.log("我暂时离开页面了");\n        clearInterval(_this.timer);\n    }else{\n       if(isElementInViewport(document.getElementsByClassName("trend")[0])){\n            _this.timer = setInterval(function(){\n                console.log(2222222)\n                console.log(new Date())\n                _this.reqRrendValue()\n\n            },timeInterval) \n        }else{\n            console.log("不在可视区域,清除定时请求");\n            clearInterval(_this.timer);\n        }\n    }\n})\n\n//监测滚动事件\nwindow.addEventListener("scroll",() =>{\n    clearInterval(_this.timer);\n    console.log(isElementInViewport(document.getElementsByClassName("trend")[0]));\n    if(isElementInViewport(document.getElementsByClassName("trend")[0])){\n        _this.timer = setInterval(function(){\n            console.log(333333)\n            console.log(new Date())\n            _this.reqRrendValue()\n\n        },timeInterval) \n    }else{\n        console.log("不在可视区域，清除定时请求");\n        clearInterval(_this.timer);\n    }\n})\n\n//元素是否在可视区域内\nfunction isElementInViewport (el, offset = 23) {\n    const box = el.getBoundingClientRect(),\n          top = (box.top >= -25),\n          left = (box.left >= 0),\n          bottom = (box.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset),\n          right = (box.right <= (window.innerWidth || document.documentElement.clientWidth) + offset);\n\n    return (top && bottom&& left  && right);\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"（4）定时器必须在组件生命周期的destory时清除。（必须）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（4）定时器必须在组件生命周期的destory时清除。（必须）","aria-hidden":"true"}},[this._v("#")]),this._v(" （4）定时器必须在组件生命周期的destory时清除。（必须）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在本组件中写的定时器")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('destroyed(){\n    console.log("我已经离开页面了");\n    clearInterval(this.timer);\n},\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("引入的js")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("//在mapLoad.js中：\n\nvar scrollIntervalStart,scrollInterval;\n\nconst mapLoad = {\n\t....\n}\n\nexport {mapLoad,scrollIntervalStart,scrollInterval}\n\n//在map.vue中：\n\nimport {mapLoad,scrollIntervalStart,scrollInterval} from '@/common/mapLoad';\n\ndestroyed(){\n\t//清除地图上的滚动定时\n    console.log(\"我已经离开页面了\");\n    clearInterval(scrollIntervalStart);\n\tclearInterval(scrollInterval);\n},\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_7-自定义指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-自定义指令","aria-hidden":"true"}},[this._v("#")]),this._v(" 7.自定义指令")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/**\n * 注册一个全局自定义指令 v-focus\n */\nVue.directive('focus', {\n    // 当绑定元素插入到 DOM 中。\n    inserted: function (el) {\n        // 聚焦元素\n        el.focus()\n    }\n})\n/**\n * 注册一个全局自定义指令 v-ctrlq,按下ctrl+q时执行操作\n * \n */\nVue.directive('ctrlq', {\n    bind:function(el,binding,vnode){\n        function documentHandler (e) {\n            if (e && e.keyCode==81 && e.ctrlKey){\n                if (binding.expression) {\n                    binding.value(e);\n                }\n            }\n        }\n        el.__ctrlq__ = documentHandler;\n        document.addEventListener('keydown',documentHandler);\n    },\n    unbind:function(el,binding){\n        document.removeEventListener('keydown',el.__ctrlq__);\n        delete el.__ctrlq__;\n    }\n})\n\n/**\n * 注册一个全局自定义指令 v-clickoutside,在元素之外点击时执行函数，如点击旁边收起下拉框\n * \n */\nVue.directive('clickoutside',{\n    bind:function (el, binding, vnode) {\n        function documentHandler (e){\n            if (el.contains(e.target)) {\n                return false;\n            }\n            if (binding.expression) {\n                binding.value(e);\n            }\n        }\n        el.__vueClickOutside__ = documentHandler;\n        document.addEventListener('click',documentHandler);\n    },\n    unbind: function (el, binding){\n        document.removeEventListener('click',el.__vueClickOutside__);\n        delete el.__vueClickOutside__;\n    }\n})\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_8-vue-router-的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-vue-router-的理解","aria-hidden":"true"}},[this._v("#")]),this._v(" 8.vue-router 的理解")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("const router = new VueRouter({\n  mode: 'history',\n  routes: [...]\n })\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_9-vue-router的守卫"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-vue-router的守卫","aria-hidden":"true"}},[this._v("#")]),this._v(" 9.vue-router的守卫")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("const router = new Router({\n\tbase:__dirname,\n\troutes:routes\n})\n\nrouter.beforeEach((to,from,next) => {\n\tif(to.meta.requireAuth){\n\t\tif(store.state.login.user){\n\t\t\tnext()\n\t\t}else{\n\t\t\tnext({path:'/index'})\n\t\t\tstore.commit('LOGIN_BOX',true)\n\t\t}\n\t}else{\n\t\tnext();\n\t}\n})\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("路由单个守卫：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("const router = new VueRouter({\n  routes: [\n    {\n      path: '/foo',\n      component: Foo,\n      beforeEnter: (to, from, next) => {\n        // ...\n      }\n    }\n  ]\n})\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("组件内的守卫")]),this._v("：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("const Foo = {\n  template: `...`,\n  beforeRouteEnter (to, from, next) {\n    // 在渲染该组件的对应路由被 confirm 前调用\n    // 不！能！获取组件实例 `this`\n    // 因为当守卫执行前，组件实例还没被创建\n  },\n  beforeRouteUpdate (to, from, next) {\n    // 在当前路由改变，但是该组件被复用时调用\n    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，\n    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。\n    // 可以访问组件实例 `this`\n  },\n  beforeRouteLeave (to, from, next) {\n    // 导航离开该组件的对应路由时调用\n    // 可以访问组件实例 `this`\n  }\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"完整的导航解析流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完整的导航解析流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 完整的导航解析流程")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("导航被触发。")]),n("li",[t._v("在失活的组件里调用离开守卫。")]),n("li",[t._v("调用全局的 beforeEach 守卫。")]),n("li",[t._v("在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。")]),n("li",[t._v("在路由配置里调用 beforeEnter。")]),n("li",[t._v("解析异步路由组件。")]),n("li",[t._v("在被激活的组件里调用 beforeRouteEnter。")]),n("li",[t._v("调用全局的 beforeResolve 守卫 (2.5+)。")]),n("li",[t._v("导航被确认。")]),n("li",[t._v("调用全局的 afterEach 钩子。")]),n("li",[t._v("触发 DOM 更新。")]),n("li",[t._v("用创建好的实例调用 beforeRouteEnter")]),n("li",[t._v("守卫中传给 next 的回调函数。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_10-vue中获取input的type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-vue中获取input的type","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.vue中获取input的type")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<input type="text" ref="pwd" v-model="rgform.rgpwd" placeholder="请输入密码" @focus="changeType">\n\nchangeType(e){\n    e.target.type = \'password\';\n},\n\n//或者：\nthis.$refs.pwd.type\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_11-vue中实现密码可见不可见"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-vue中实现密码可见不可见","aria-hidden":"true"}},[this._v("#")]),this._v(" 11.vue中实现密码可见不可见")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<input type="password" v-model="rgform.rgpwd" ref="rgspwd" placeholder="请输入密码" v-if="viewFlag">\n<input type="text" v-model="rgform.rgpwd" ref="rgspwd" placeholder="请输入密码" v-else><i class="el-eye" @click="changeView"></i>\n\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("changeView(){\n    this.viewFlag=false;\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_12-for循环上需要有key标志，标志唯一性，否则报warning。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-for循环上需要有key标志，标志唯一性，否则报warning。","aria-hidden":"true"}},[this._v("#")]),this._v(" 12.for循环上需要有key标志，标志唯一性，否则报warning。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<el-option  v-for="item in protalOptions" :label="item.name" :key="item.id" :value="item.id"></el-option>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_13-vue中title图标的添加"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-vue中title图标的添加","aria-hidden":"true"}},[this._v("#")]),this._v(" 13.vue中title图标的添加")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(" new HtmlWebpackPlugin({\n  filename: 'index.html',\n  template: 'index.html',\n  inject: true,\n  favicon:'./favicon.ico'\n}),\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("new HtmlWebpackPlugin({\n  filename: config.build.index,\n  template: 'index.html',\n  inject: true,\n  favicon: './favicon.ico',\n  minify: {\n    removeComments: true,\n    collapseWhitespace: true,\n    removeAttributeQuotes: true\n    // more options:\n    // https://github.com/kangax/html-minifier#options-quick-reference\n  },\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_14-ie11中打开vue项目页面一片空白"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-ie11中打开vue项目页面一片空白","aria-hidden":"true"}},[this._v("#")]),this._v(" 14.ie11中打开vue项目页面一片空白")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('module.exports = {\n\tentry: {\n\t\tapp: ["babel-polyfill", "./src/main.js"]\n\t}\n},\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_15-为何vue不支持ie8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_15-为何vue不支持ie8","aria-hidden":"true"}},[this._v("#")]),this._v(" 15.为何vue不支持IE8")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Object.defineProperty()")]),this._v("\n该方法允许精确添加或修改对象的属性。一般情况下，我们为对象添加属性是通过赋值来创建并显示在属性枚举中（for…in 或 Object.keys 方法），但这种方式添加的属性值可以被改变，也可以被删除。而使用 "),e("code",[this._v("Object.defineProperty()")]),this._v(" 则允许改变这些额外细节的默认设置。例如，默认情况下，使用 "),e("code",[this._v("Object.defineProperty()")]),this._v("增加的属性值是不可改变的。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_16-vue的js中的动态html中的img的src写法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-vue的js中的动态html中的img的src写法","aria-hidden":"true"}},[this._v("#")]),this._v(" 16.vue的js中的动态html中的img的src写法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('var contentHtml = `<div class="popWrap">\n    <div class="popTop">\n        <div class="imgBox">\n            <img src=${require("@/images/portait.jpg")}>\n        </div>\n        <ul class="infoRight">\n            <li><label>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</label><span>${cfeature.get(\'person_name\')}</span>\n            <div class="hrefs"><a title="到档案" class="popArchives" data-card="${cfeature.get(\'person_card\')}"></a>\n            </div>\n        </ul>\n    </div>\n    <div class="closePopup">\n        <span>x</span>\n    </div>\n</div>`;\noverlay.setPosition(undefined);\nif(overlay.getPosition() == undefined){\n    overlay.setPosition(cfeature.get(\'center\'));\n    map.getView().setCenter(cfeature.get(\'center\'));\n}\n\nmap.addOverlay(overlay);\n$("#popup").html(contentHtml);\n')])])])}],!1,null,null,null);e.default=s.exports}}]);