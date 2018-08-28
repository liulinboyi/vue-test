/**
 * Created by jige on 2016/12/1.
 */
// 使用 Mock
var Mock = require('mockjs');

//右下角lists
Mock.mock(/lists/, 'get', function (options) {
    let data = Mock.mock({
        "result|25":[
            {
                "id|+1":1,
                "a|+1":111234,
                "b|+1":4453535,
                "c|+1":434342
            }
        ]
    })
    return {
        statusCode:200,
        bodyData: data.result
    }
});

//右下角lists
Mock.mock(/sPost/, 'post', function (options) {
    let data = Mock.mock({
        "result|25":[
            {
                "id|+1":1,
                "a|+1":111234,
                "b|+1":4453535,
                "c|+1":434342
            }
        ]
    })
    return {
        statusCode:200,
        bodyData: data.result
    }
});