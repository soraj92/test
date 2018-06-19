let info = {};

info.init = function (body, callback) {
    body = Buffer.concat(body).toString();
    const info = body.split('\n');

    let null_check = 0;
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

    console.log('info.init');
    infosubString(info, null_check, idx, code, bsc, ptn, inv, scan_m, car, s_day, s_time, via, line, serial, mgr);
    console.log('info - settimeout');
    console.log(null_check);
    callback(info, null_check, idx, code, bsc, ptn, inv, scan_m, car, s_day, s_time, via, line, serial, mgr);
}

function infosubString(info, null_check, idx, code, bsc, ptn, inv, scan_m, car, s_day, s_time, via, line, serial, mgr) {
    null_check = null_check;
    for (var i = 0; i < info.length; i++) {
        if (!info[i]) {
            null_check = i;
            break;
        }

        code.push(info[i].substring(0, 2).trim());
        bsc.push(info[i].substring(2, 7));
        ptn.push(info[i].substring(7, 12));
        inv.push(info[i].substring(12, 24).trim());
        scan_m.push(info[i].substring(24, 32));
        car.push(info[i].substring(32, 37));
        s_day.push(info[i].substring(37, 45));
        s_time.push(info[i].substring(45, 51));
        via.push(info[i].substring(51, 53).trim());
        line.push(info[i].substring(53, 55));
        serial.push(info[i].substring(55, 59));

        if (info[i].length == 71) {
            mgr.push(info[i].substring(59, 71));
        } else {
            mgr.push("");
        }

        idx.push(bsc[i] + inv[i]);
    }
}

module.exports = info;