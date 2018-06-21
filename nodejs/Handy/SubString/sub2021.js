let sub2021 = {};

sub2021.init = function (info, callback) {

    let idx = []; // bsc + inv
    let code;
    let bsc; // 집하스캔
    let ptn; // 상대점소
    let inv; // 운송장
    let scan_m; //스캔 사원
    let car; // 차량
    let s_day; // 스캔 날
    let s_time; // 스캔 시간
    let via; //경유 구분
    let line; // line
    let serial; // 시리얼
    let mgr; //연계일보(있을수 있고 없을수 있꼬)
    let binds = [];

    infoSubString(info, idx, code, bsc, ptn, inv, scan_m, car, s_day, s_time, via, line, serial, mgr, binds);
    callback(binds);
}

function infoSubString(info, idx, code, bsc, ptn, inv, scan_m, car, s_day, s_time, via, line, serial, mgr, binds) {
    var binds_sub = [];

    code = info.substring(0, 2).trim();
    binds_sub.push(code);

    bsc = info.substring(2, 7);
    binds_sub.push(bsc);

    ptn = info.substring(7, 12);
    binds_sub.push(ptn);

    inv = info.substring(12, 24).trim();
    binds_sub.push(inv);

    scan_m  = info.substring(24, 32);
    binds_sub.push(scan_m);

    car = info.substring(32, 37);
    binds_sub.push(car);

    s_day = info.substring(37, 45);
    binds_sub.push(s_day);

    s_time = info.substring(45, 51);
    binds_sub.push(s_time);

    via = info.substring(51, 53).trim();
    binds_sub.push(via);

    line = info.substring(53, 55);
    binds_sub.push(line);

    serial = info.substring(55, 59);
    binds_sub.push(serial);

    if (info.length == 71) {
        mgr = info.substring(59, 71);
    } else {
        mgr = "";
    }
    binds_sub.push(mgr);

    idx  = bsc + inv;
    binds.push(binds_sub);
}

module.exports = sub2021;