let sub05 = {};

sub05.init = function (info, callback) {

    let idx; // bsc + inv

    let code; //작업 구분
    let bsc; // 집하스캔
    let inv; // 운송장
    let sct; // 집하예정시간
    let scan_m; //스캔 사원
    let s_day; // 스캔 날
    let s_time; // 스캔 시간
    let car; // 차량
    let line; // line
    let serial; // 시리얼
    let binds = [];

    infoSubString(info, idx, code, bsc, inv, sct, scan_m, s_day, s_time, car, line, serial, binds);
    callback(binds);
}

function infoSubString(info, idx, code, bsc, inv, sct, scan_m, s_day, s_time, car, line, serial, binds) {
    var binds_sub = [];

    code = info.substring(0, 2).trim();

    bsc = info.substring(2, 7);
    binds_sub.push(bsc);

    inv = info.substring(7, 19).trim();
    binds_sub.push(inv);

    sct = info.substring(19, 21);
    binds_sub.push(sct);

    scan_m = info.substring(21, 29);
    binds_sub.push(scan_m);

    s_day = info.substring(29, 37);
    binds_sub.push(s_day);

    s_time = info.substring(37, 43);
    binds_sub.push(s_time);

    car = info.substring(43, 48);
    binds_sub.push(car);

    line = info.substring(48, 50);
    serial = info.substring(50, 54);
    binds_sub.push(line + serial);

    idx = bsc + inv;
    binds.push(binds_sub);
}

module.exports = sub05;