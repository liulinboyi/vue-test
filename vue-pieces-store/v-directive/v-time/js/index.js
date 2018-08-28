/**
 * ============================
 * @Author:   tlm
 * @Version:  1.0 
 * @DateTime: 2018-04-09
 * ============================
 */

 Vue.directive('time', { 
 	bind: function (el,binding) {
 		el.innerHTML = Time.getFormatTime(binding.value);
 		el.__timeout__ = setInterval(function() {
 			el.innerHTML = Time.getFormatTime(binding.value);
 		},60000);
 	},
 	unbind: function(el){
 		clearInterval(el.__timeout__);
 		delete el.__timeout__;
 	}
 });
 Vue.directive('birth', { 
 	bind: function (el,binding) {
 		el.innerHTML = Time.getBirthTime(binding.value);
 		el.__timeout__ = setInterval(function() {
 			el.innerHTML = Time.getBirthTime(binding.value);
 		},86400000);
 	},
 	unbind: function(el){
 		clearInterval(el.__timeout__);
 		delete el.__timeout__;
 	}
 });
var app = new Vue({
	el:'#app',
	data:{
		timeNow:(new Date()).getTime(),
		timeBefore:'2018-04-10 10:42:33',
		timeHour:'2017-05-10 00:00:00',
		birth:'2018-04-02',
	}
})

