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
                oracledb.init(total_binds, function () {
                    console.log('허허거후가헉');
                    callback(null, 1);
                });

            });
        });
    }, function (err, result) {

        console.log('이벤트end보다 후');
        res.write("1");
        res.end();
    }]);

}

module.exports.logistics = logistics;