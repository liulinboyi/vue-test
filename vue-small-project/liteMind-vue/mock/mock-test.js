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