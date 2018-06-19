const async = require('async');

const logistics = function (req, res) {

    let body = [];
    
    async.waterfall([function() {
        req.on('data', function(chunk) {
            body.push(chunk);
        }).on('end', function() {
            console.log('end');
        });
    }]);

    console.log('이벤트end보다 후');
}

module.exports.logistics = logistics;