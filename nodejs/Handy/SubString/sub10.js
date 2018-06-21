let sub10 = {};

sub10.init = function (info, callback) {

    let idx; // bsc + inv

    let code;
    let bsc; // 집하스캔
    let inv; // 운송장
    let sub_inv; // 보조 운송장
    let svc_code; // 서비스코드
    let filt_code; // 도착지코드
    let scan_m; //스캔 사원
    let s_day; // 스캔 날
    let s_time; // 스캔 시간
    let car; // 차량
    let pay; //현불
    let fare; //운임
    let line; // line
    let serial; // 시리얼
    let binds = [];

    infoSubString(info, idx, code, bsc, inv, sub_inv, svc_code, filt_code, scan_m, s_day, s_time, car, pay, fare, line, serial, binds);
    callback(binds);
}

function infoSubString(info, idx, code, bsc, inv, sub_inv, svc_code, filt_code, scan_m, s_day, s_time, car, pay, fare, line, serial, binds) {
    var binds_sub = [];

    code = info.substring(0, 2).trim();

    bsc = info.substring(2, 7);
    binds_sub.push(bsc);

    ptn = info.substring(7, 12);
    binds_sub.push(ptn);

    inv = info.substring(12, 24).trim();
    binds_sub.push(inv);

    scan_m = info.substring(24, 32);
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
    serial = info.substring(55, 59);
    binds_sub.push(line + serial); //단말기

    
    idx = bsc + inv;
    binds.push(binds_sub);
}
module.exports = sub10;