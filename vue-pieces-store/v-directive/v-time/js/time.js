/**
 * ============================
 * @Author:   tlm
 * @Version:  1.0 
 * @DateTime: 2018-04-09
 * ============================
 */

var Time = {
	// 获取当前时间戳
	getUnix: function() {
		var date = new Date();
		return date.getTime();//可返回距 1970 年 1 月 1 日之间的毫秒数。
	},
	//获取今天0点0分0秒的时间戳
	getTodayUnix: function() {
		var date = new Date();
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);
		return date.getTime();
	},
	//获取今年1月1日0点0分0秒的时间戳
	getYearUnix: function() {
		var date = new Date();
		date.setMonth(0);
		date.setDate(0);
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);
		return date.getTime();
	},
	//获取标准年月日
	getLastDate: function(time) {
		var date = new Date(time);
		var month = date.getMonth() + 1 < 10 ? 0 + date.getMonth() : date.getMonth();
		var day = date.getDate() < 10 ? 0 + date.getDate() : date.getDate();
		return date.getFullYear() + '-' + month + '-' + day;
	},
	//转换时间
	getFormatTime: function(timeStamp){
		var now = this.getUnix();
		var today = this.getTodayUnix();
		var year = this.getYearUnix();
		timeStamp = new Date(timeStamp).getTime();
		var timer = (now - timeStamp) / 1000;
		var tip = '';

		if(timer <= 0) {
			tip = '刚刚';
		}else if(Math.floor(timer/60) <= 0){
			tip = '刚刚';
		}else if(timer < 3600){
			tip = Math.floor(timer/60) +'分钟前';
		}else if (timer >= 3600 && (timeStamp - today >= 0)){
			tip = Math.floor(timer/3600) +'小时前';
		}else if(timer/86400 < 31){
			tip = Math.floor(timer/86400) +'天前';
		}else{
			tip = this.getLastDate(timeStamp);
		}

		return tip;
	},
	//转换生日时间格式
	getBirthTime: function(time){
		var now = this.getUnix();
		var time = new Date(time).getTime();
		var timer = (now - time) / 1000;
		var tip = '已经出生' +Math.floor( timer / 86400) +'天';

		return tip;
	}

}