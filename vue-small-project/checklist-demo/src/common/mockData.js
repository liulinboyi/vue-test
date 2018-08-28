/**
 * Created by jige on 2016/12/1.
 */
// 使用 Mock
var Mock = require('mockjs');

// 考场列表信息
Mock.mock('/lists','get',function(){
    let data = Mock.mock({
        "result|35":[
            {
                "id|+1":1,
                "title|1":['科目二第07考点马路','科目一第01考点马路','科目二第08考点马路','科目三第09考点'],
                "hotDeg|1-5":1,
                "desc|0-1":'@county(true)'
            }
        ]
    })

    return {
        bodyData:data.result
    }
})
// 考场列表信息
Mock.mock('/examlists','get',function(){
    let data = Mock.mock({
        "result|35":[
            {
                "id|+1":1,
                "title|1":['科目二第07考点马路','科目一第01考点马路','科目二第08考点马路','科目三第09考点'],
                "hotDeg|1-5":1,
                "desc|0-1":'@county(true)'
            }
        ]
    })

    return {
        bodyData:data.result
    }
})