const async = require('async');

const logistics = function (req, res) {

    let body = [];
    
    async.waterfall([function(callback) {
        req.on('data', function(chunk) {
            body.push(chunk);
        }).on('end', function() {
            const info = require('./infoSubString');

            info.init(body, function(info, null_check, idx, code, bsc, ptn, inv, scan_m, car, s_day, s_time, via, line, serial, mgr) {
            
                if(null_check[0]==0) {
                    null_check = [];
                    null_check.push(info.length);
                }

                for(var i = 0; i < null_check[0]; i++)
                    console.log(idx[i]);
            });
            console.log('end')
            callback(null, body);
        });
    }, function(err, body) {
        
        console.log('이벤트end보다 후');
        console.dir(body);
    }]);

}

module.exports.logistics = logistics;