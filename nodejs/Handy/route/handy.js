const async = require('async');

const logistics = function (req, res) {

    let body = [];
    
    async.waterfall([function(callback) {
        req.on('data', function(chunk) {
            body.push(chunk);
        }).on('end', function() {
            const info = require('./infoSubString');
            let info_sub;
            info.init(body, function(result) {
                info_sub = result;
            });
            console.log(info_sub);
            console.log('end')
            callback(null, body);
        });
    }, function(err, body) {
        
        console.log('이벤트end보다 후');
        console.dir(body);
    }]);

}

module.exports.logistics = logistics;