let info = {};

info.init = function (body, callback) {
    body = Buffer.concat(body).toString();
    const info = body.split('\n');

    let total_binds = [];

    console.log('info.init');
    totalsubString(info, total_binds);
    callback(total_binds);
}

function totalsubString(info, total_binds) {

    for (var i = 0; i < info.length; i++) {
        let sub;

        if (!info[i]) {
            continue;
        }
        const codecheck = info[i].substring(0, 2).trim();

        if (codecheck == 05) {
            sub = require('./sub05');
            sub.init(info[i], total_binds[0], function () {

            });
        } else if (codecheck == 10) {

            sub = require('./sub10');
            sub.init(info[i], function (binds) {
                total_binds[1].push(binds);
            });
        } else if (codecheck == 11 || codecheck == 31 || codecheck == 42) {

            sub = require('./sub113142');
            sub.init(info[i], total_binds[2], function () {

            });
        } else if (codecheck == 20 || codecheck == 21) {

            sub = require('./sub2021');
            sub.init(info[i], function (binds) {
                console.log(binds);
                //total_binds[3].push(binds);
            });
        } else if (codecheck == 23) {

            sub = require('./sub23');
            sub.init(info[i], total_binds[4], function () {

            });
        } else if (codecheck == 24 || codecheck == 25) {
            sub = require('./sub2425');
            sub.init(info[i], total_binds[5], function () {

            });
        } else if (codecheck == 32) {

            sub = require('./sub32');
            sub.init(info[i], total_binds[6], function () {

            });
        } else if (codecheck == 40) {
            sub = require('./sub40');
            sub.init(info[i], total_binds[7], function () {

            });
        } else if (codecheck == 41) {
            sub = require('./sub41');
            sub.init(info[i], total_binds[8], function () {

            });
        }

    }


}

module.exports = info;