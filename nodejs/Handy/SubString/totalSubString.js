let info = {};

info.init = function (body, callback) {
    body = Buffer.concat(body).toString();
    const info = body.split('\n');

    let total_binds = [];
    let idx = []; // bsc + inv
    let code = [];
    let bsc = []; // 집하스캔
    let ptn = []; // 상대점소
    let inv = []; // 운송장
    let scan_m = []; //스캔 사원
    let car = []; // 차량
    let s_day = []; // 스캔 날
    let s_time = []; // 스캔 시간
    let via = []; //경유 구분
    let line = []; // line
    let serial = []; // 시리얼
    let mgr = []; //연계일보(있을수 있고 없을수 있꼬)
    let binds = [];

    console.log('info.init');
    infosubString(info, total_binds, idx, code, bsc, ptn, inv, scan_m, car, s_day, s_time, via, line, serial, mgr, binds);
    console.log('info - settimeout');
    callback(binds);
}

function infosubString(info, total_binds, idx, code, bsc, ptn, inv, scan_m, car, s_day, s_time, via, line, serial, mgr, binds) {

    for (var i = 0; i < info.length; i++) {
        let sub;

        if (!info[i]) {
            continue;
        }
        var binds_sub = [];
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


        sub.init();
        binds_sub.push(code[i]);

        bsc.push(info[i].substring(2, 7));
        binds_sub.push(bsc[i]);

        ptn.push(info[i].substring(7, 12));
        binds_sub.push(ptn[i]);

        inv.push(info[i].substring(12, 24).trim());
        binds_sub.push(inv[i]);

        scan_m.push(info[i].substring(24, 32));
        binds_sub.push(scan_m[i]);

        car.push(info[i].substring(32, 37));
        binds_sub.push(car[i]);

        s_day.push(info[i].substring(37, 45));
        binds_sub.push(s_day[i]);

        s_time.push(info[i].substring(45, 51));
        binds_sub.push(s_time[i]);

        via.push(info[i].substring(51, 53).trim());
        binds_sub.push(via[i]);

        line.push(info[i].substring(53, 55));
        binds_sub.push(line[i]);

        serial.push(info[i].substring(55, 59));
        binds_sub.push(serial[i]);

        if (info[i].length == 71) {
            mgr.push(info[i].substring(59, 71));
        } else {
            mgr.push("");
        }
        binds_sub.push(mgr[i]);

        idx.push(bsc[i] + inv[i]);
        binds.push(binds_sub);
    }
}

module.exports = info;