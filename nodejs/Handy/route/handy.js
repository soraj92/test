const async = require('async');

const logistics = function (req, res) {

    let body = [];

    async.waterfall([function (callback) {
        req.on('data', function (chunk) {
            body.push(chunk);
        }).on('end', function () {
            const info = require('../SubString/totalSubString');

            info.init(body, function (total_binds) {
                const oracledb = require('../Database/oracleDB');

                console.log(total_binds);
               // oracledb.init(total_binds);
                
            });
            // console.log('result : ' + result);
            // callback(null, result);
        });
    }, function (err, result) {

        console.log('이벤트end보다 후');
    }]);

}

module.exports.logistics = logistics;