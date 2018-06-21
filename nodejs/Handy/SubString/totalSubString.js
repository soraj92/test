let info = {};

info.init = function (body, callback) {
    body = Buffer.concat(body).toString();
    const info = body.split('\n');

    let total_binds = [];

    console.log('info.init');
    totalsubString(info, total_binds);
    console.log('info - settimeout');
    callback(binds);
}

function totalsubString(info, total_binds) {

    for (var i = 0; i < info.length; i++) {
        let sub;

        if (!info[i]) {
            continue;
        }
        code.push(info[i].substring(0, 2).trim());

        if (code[i] == 05)
            sub = require('./sub05');
        else if (code[i] == 10)
            sub = require('./sub10');
        else if (code[i] == 11 || code[i] == 31 || code[i] == 42)
            sub = require('./sub113142');
        else if (code[i] == 20 || code[i] == 21)
            sub = require('./sub2021');
        else if (code[i] == 23)
            sub = require('./sub23');
        else if (code[i] == 24 || code[i] == 25)
            sub = require('./sub2425');
        else if (code[i] == 32)
            sub = require('./sub32');
        else if (code[i] == 40)
            sub = require('./sub40');
        else if (code[i] == 41)
            sub = require('./sub41');


        sub.init(info, function(binds) {
           console.log(binds);
        });


    }
}

module.exports = info;