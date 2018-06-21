let info = {};

info.init = function (body, callback) {
    body = Buffer.concat(body).toString();
    const info = body.split('\n');

    let total_binds = new Array(9);

    for (var i = 0; i < total_binds.length; i++)
        total_binds[i] = [];

    console.log('info.init');
    totalsubString(info, total_binds);
    setTimeout(function() {console.log('ㅎㅎ')}, 10000);
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
            sub.init(info[i], function (binds) {
                total_binds[0].push(binds.pop());
            });
        } else if (codecheck == 10) {

            sub = require('./sub10');
            sub.init(info[i], function (binds) {
                total_binds[1].push(binds.pop());
            });
        } else if (codecheck == 11 || codecheck == 31 || codecheck == 42) {

            sub = require('./sub113142');
            sub.init(info[i], function (binds) {
                total_binds[2].push(binds.pop());
            });
        } else if (codecheck == 20 || codecheck == 21) {

            sub = require('./sub2021');
            sub.init(info[i], function (binds) {
                total_binds[3].push(binds.pop());
            });
        } else if (codecheck == 23) {

            sub = require('./sub23');
            sub.init(info[i], function (binds) {
                total_binds[4].push(binds.pop());
            });
        } else if (codecheck == 24 || codecheck == 25) {
            sub = require('./sub2425');
            sub.init(info[i], function (binds) {
                total_binds[5].push(binds.pop());
            });
        } else if (codecheck == 32) {

            sub = require('./sub32');
            sub.init(info[i], function (binds) {
                total_binds[6].push(binds.pop());
            });
        } else if (codecheck == 40) {
            sub = require('./sub40');
            sub.init(info[i], function (binds) {
                total_binds[7].push(binds.pop());
            });
        } else if (codecheck == 41) {
            sub = require('./sub41');
            sub.init(info[i], function (binds) {
                total_binds[8].push(binds.pop());
            });
        }

    }


}

module.exports = info;