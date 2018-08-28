var Mock = require('mockjs');
var express = require('express');

let app = express();

app.listen('8090');
app.all('/api1/tests', function(req, res) {
    res.json(Mock.mock({
        "status": 200,
        "data|5": [{
            "name|5-8": /[a-zA-Z]/,
            "id|+1": 1,
            "value|0-500": 20
        }]
    }));
});

/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});*/