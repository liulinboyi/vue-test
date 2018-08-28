import Mock from 'mockjs';

Mock.mock('/lists','get',function(){
	var lists = Mock.mock({
		"result|15":[
			{
				"id|+1":1,
				"title|1":['科目二第07考点马路','科目二第01考点马路','科目二第08考点马路','科目二第09考点'],
				"desc|0-1":'@county(true)'
			}
		]
	})

	return {
		lists
	}
})