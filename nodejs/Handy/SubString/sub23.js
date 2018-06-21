let sub23 = {};

sub23.init = function (info, callback) {

    let idx; // bsc + inv

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

module.exports = sub23;