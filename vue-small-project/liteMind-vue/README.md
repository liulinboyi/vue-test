# litemind-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## vue中请求本地数据
### 1.修改webpack.dev.conf.js配置
[VUE开发请求本地数据的配置，旧版本dev-server.js，新版本webpack.dev.conf.js](https://www.xiuyuan.info/?p=230)

在此文件中增加：
```
var appData = require('../data.json')//加载本地数据文件
var seller = appData.seller//获取对应的本地数据
var ratings = appData.ratings
```
上面的第一行是引入json数据所在的地址，第二和第三行是分别得到相应的数据。

data.json一般放在index同级下，自认为可以放在别的地方，此时也就第一行有相应的路径对应。
```
//data.json
{
  "seller": {
    "name": "粥品香坊（回龙观）",
    "description": "蜂鸟专送",
    "deliveryTime": 38,
    "score": 4.2,
    "serviceScore": 4.1,
    "supports": [
      {
        "type": 0,
        "description": "在线支付满28减5"
      },
      {
        "type": 1,
        "description": "VC无限橙果汁全场8折"
      }
    ],
    "infos": [
      "该商家支持发票,请下单写好发票抬头",
      "品类:其他菜系,包子粥店",
      "北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340",
      "营业时间:10:00-20:30"
    ]
  },
  "ratings":{
      "id":1,"name":"wangzi","age":24
  },
  "goods":[
       {"id":1,"name":"wangzi","age":24},
       {"id":2,"name":"lisi","age":44},
       {"id":3,"name":"zhangsan","age":22}
  ]
}
```
上述json文件中，有三组数据，seller、rating、goods，这都可以在webpack.dev.conf.js中引入使用

同时在webpack.dev.conf.js中，需要做这样的配置才可在其他文件中进行请求，在devServer最后增加下面的代码：
```
before(app) {
    app.get('/api/seller', (req, res) => {
        res.json({
          errno: 0,
          data: seller
        })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
    }),
    app.get('/api/goods', (req, res) => {
        res.json({
          errno: 0,
          data: goods
        })
    }),
    app.get('/api/ratings', (req, res) => {
        res.json({
          errno: 0,
          data: ratings
        })
    })
}
```
此处就实现了get请求，在浏览器框口输入http://localhost:8080/api/seller 就可以看到json数据了。
要实现post请求：
```
app.post('/api/foods', function (req, res) { // 注意这里改为post就可以了
  res.json({
    errno: 0,
    data: foods
  });
})
```
<font color=red>注意每次更改配置后，都必须重新启动，`npm run dev`</font>

在文件中，则可以进行对此接口数据进行请求，请求方式此处列举两个：
均可以在network中进行查看
* 使用es6增加的fetch请求：
```
methods: {
  	getPrice () {
    	fetch('/api/seller')
    	.then(response => response.json())
		.then(function(datas){
			console.log(datas);
		})
  	},
    postRatings (){
       	fetch('/api/goods',{method:'post'})
    	.then(response => response.json())
		.then(function(datas){
			console.log(datas);
		})
       }
    },
created () {
  this.getPrice(),
  this.postRatings()
}
```

* 通过vue-resource插件中的this.$http.get(‘url’).then()获取


```
methods: {
    getRatings (){
  	    // 这个需要vue-resource插件
  	    this.$http.get('/api/ratings')
        .then((res) => {
            console.log(res)
            console.log(res.body);//获取数据
        })
     },
     postR (){
     	this.$http.post('/api/goods')
        .then((res) => {
            console.log(res)
            console.log(res.body);//获取数据
        })
     },
},
created () {
  this.getRatings(),
  this.postR()
}
```
* vue-resource在2.0之后不再更新，所以使用axios来进行请求：

#### 此处扩展vue-resource插件使用：
在Vue1.0的时候有一个官方推荐的 ajax 插件 vue-resource，但是自从 Vue 更新到 2.0 之后，官方就不再更新 vue-resource。
> 1.安装vue-resource到项目中，找到当前项目
```
npm install vue-resource --save
```
>2.安装完毕后，在main.js中导入，如下所示：
```
import  VueResource  from 'vue-resource'

Vue.use(VueResource) 
```
[谈谈Vue.js——vue-resource全攻略](http://www.jb51.net/article/103159.htm)

支持的HTTP方法

vue-resource的请求API是按照REST风格设计的，它提供了7种请求API：

* get(url, [options])
* head(url, [options])
* delete(url, [options])
* jsonp(url, [options])
* post(url, [body], [options])
* put(url, [body], [options])
* patch(url, [body], [options])

除了jsonp以外，另外6种的API名称是标准的HTTP方法。当服务端使用REST API时，客户端的编码风格和服务端的编码风格近乎一致，这可以减少前端和后端开发人员的沟通成本。

客户端请求方法	服务端处理方法
* this.$http.get(...)	Getxxx
* this.$http.post(...)	Postxxx
* this.$http.put(...)	Putxxx
* this.$http.delete(...)	Deletexxx


#### 此处扩展使用axios的使用方法
[vue2.0项目实战（3）使用axios发送请求](https://www.cnblogs.com/zhouyangla/p/6753673.html)
安装：
```
npm install axios
```
axios并不是插件，所以不必使用`Vue.use()`,而是在什么地方使用时引用即可;
参考[vue2.0项目实战（3）使用axios发送请求](https://www.cnblogs.com/zhouyangla/p/6753673.html)

下面是我的实际实践结果，代码已经上传，可参考[github上代码](https://github.com/arieltlm/vue-test/tree/master/liteMind-vue) 
(刚开始由于我在测试学习过程中使用了vue-resource,所以$http已经占用，所以在main.js中增加的原型链一直无法使用，得到了以下的代码可行)
```
//home.vue

<script>
	import axios from 'axios'
	export default{
		methods:{
		    getpostAxios (){
		    	axios.get('/api/ratings')
		    	.then(res => {
		    		console.log(res.data);
		    	})
		    	axios.post('./api/goods',
		    	{
		    		data:1,
		    		params:233
		    	})
		    	.then(res => {
		    		console.log(11111);
		    		console.log(res.data);
		    	})
		    },
		    axiosAllTest (){
		    	function getUserAccount() {
		    	  	return axios.get('/api/seller')
	    	  			.then(res => {
	    	  				console.log(2222);
	    	  				console.log(res);
	    	  			})
		    	}
		    	function getUserPermissions() {
		    	  return axios.get('/api/ratings')
		    	  	.then(res => {
    	  				console.log(333333);
    	  				console.log(res);
    	  			})
		    	  	
		    	}
		    	axios.all([getUserAccount(), getUserPermissions()])
		    	.then(axios.spread(function (acct, perms){
		    	    //两个请求现已完成
		    	    console.log(acct);//undefined
		    	    console.log(perms);//undefined
		    	    console.log('complete');
		    	}));
		    }
		    
		},
		created (){
			this.getpostAxios();
			this.axiosAllTest();
		}
	}
	
</script>
```
首先需要引入axios：
```
import axios from 'axios'
```
后面使用的就是
* axios.request（config）
* axios.get（url [，config]）
* axios.delete（url [，config]）
* axios.head（url [，config]）
* axios.post（url [，data [，config]]）
* axios.put（url [，data [，config]]）
* axios.patch（url [，data [，config]]）

而文章一开始所说的在main.js中添加原型链也可用(避免重复，我使用了$http1)：
```
import axios from 'axios'
Vue.prototype.$http1 = axios
```

```
//entity.vue中
methods:{
	getData(){
		console.log(this);
    	this.$http1.get('/api/seller')
	  	.then(function (response) {
	  		console.log(1123);
	  		console.log(response.data);
	  	})
	  	.catch(function (error) {
	    	console.log(error);
	  	});
    }
},
created (){
	this.getData();
}
```
![WX20180226-163852@2x.png](https://i.loli.net/2018/02/26/5a93c7b2acdb2.png)

此处想提醒自己，this就指向vue。

### 2.使用json server 搭建mock服务器
可参考[vue-cli 本地开发mock数据使用方法](https://www.jianshu.com/p/ccd53488a61b)

首先安装`json-server`(注意全局安装，mac上要加上sudo)
```
npm install -g json-server
```
接着项目目录下创建mock文件夹，在文件夹中创建db.json和mock-test.js，还有将所有post请求转为get请求的post-to-get.js

其中db.json中存放json数据：
```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}

```
对应的在package.json中在script中增加mock的启动项：
```
"mock": "json-server --watch mock/db.json",
"mockdev": "npm run mock & npm run dev"
```
第一句的意思是监测路径mock/db.json,如此就可以在这里更改文件存放位置以及文件名字了。
第二句是为了mock起的服务和vue命令服务同时启动。

然后在命令行中：
```
npm run mock
```
此时在浏览器中打开http://localhost:3000/可得到![1651860-349bfc482aba7065.png](https://i.loli.net/2018/02/26/5a93e9f9dd874.png)
此时可以分别访问：http://localhost:3000/posts,http://localhost:3000/comments,http://localhost:3000/profile 即返回数据

文章中使用fake.js制作数据的，而我们已经对mock.js熟悉了，所以使用mock.js来产生多个假数据：
前面已经使用`npm install mock`安装了mock.js,则
```
//mock-test.js
module.exports = function () {
	let Mock=require('mockjs');

	var bd = Mock.mock({
		'bodyData|15':[
	       {   
	           'id|+1':1,
	           'methods|1':["火车频次战法","飞机频次战法","汽车频次战法"],
	           'hasContent|1-2':true
	       }]
	});
		

	return{
		tasklists:bd
	}
}
```
可以在命令行中使用json-server mock/mock-test.js来启动这个服务，然后就可以通过http://localhost:3000/tasklists来访问数据

假如使用的是这个数据，那么在package.json中的script中的mock项可以修改为：
```
"mock":"json-server --watch mock/mock-test.js"
```

在开发过程中，有时候想直接模拟获取POST请求返回结果，可以添加 express 中间件 **将POST请求转为GET请求**：
在mock文件夹下生成post-to-get.js文件：
```
module.exports = function (req, res, next) {
  req.method = "GET";
  next();
}
```
此时配置项可更改为：
```
"mock": "json-server --watch mock/db.json --m mock/post-to-get.js",
```

#### 下面说一下**代理**，接口写好了，那么如何请求呢？
在 config/index.js 的 proxyTable 将请求映射到 http://localhost:3000
```
proxyTable: {
    '/api1/':{
        target:'http://localhost:3000',
        changeOrigin:true,
        pathRewrite:{
            '^/api1':''
        }
    }
},
```
在组件中进行请求：
```
methods:{
    mockReq (){
    	axios.get('/api1/posts')
    	.then(res => {
    		console.log('mock server');
    		console.log(res.data);
    	})
    	axios.post('/api1/comments')
    	.then(res => {
    		console.log('mock server1');
    		console.log(res.data);
    	})
    	axios.get('/api1/tasklists')
    	.then(res => {
    		console.log('mock server2');
    		console.log(res.data);
    	})
    }
    
},
created (){
	this.mockReq();
}
```
启动：
```
npm run mockdev
```
假如配置到db.json时前两个请求就成功，假如配置到mock-test.js第三个请求就是成功的。
