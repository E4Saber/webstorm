/**
 * Created by Administrator on 2016/9/18 0018.
 */

var http = require('http');
var req = http.get({host : 'www.byvoid.com'});
req.on('response', function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
        console.log(data);
    });
});
