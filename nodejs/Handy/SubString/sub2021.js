let sub2021 = {};

sub2021.init = function (info, callback) {
    
    let binds = [];

    infoSubString(info, binds);
    callback(binds);
}

function infoSubString(info, binds) {
    var binds_sub = [];

    const code = info.substring(0, 2).trim(); //작업구분
    binds_sub.push(code);

    const bsc = info.substring(2, 7); // 집하 스캔
    binds_sub.push(bsc);

    const ptn = info.substring(7, 12); // 상대 점소
    binds_sub.push(ptn);

    const inv = info.substring(12, 24).trim(); // 운송장
    binds_sub.push(inv);

    const scan_m = info.substring(24, 32); // 스캔 사원
    binds_sub.push(scan_m);

    const car = info.substring(32, 37); //차량
    binds_sub.push(car);

    const s_day = info.substring(37, 45); //스캔 일자
    binds_sub.push(s_day);

    const s_time = info.substring(45, 51); // 스캔 시간
    binds_sub.push(s_time);

    const via = info.substring(51, 53).trim(); // 경유 구분
    binds_sub.push(via);

    const line = info.substring(53, 55); // line
    const serial = info.substring(55, 59); // serial
    binds_sub.push(line + serial); // 단말기

    let mgr;
    if (info.length == 71) {
        mgr = info.substring(59, 71); //연계일보
    } else {
        mgr = "";
    }
    binds_sub.push(mgr);

    const idx = bsc + inv;
    binds.push(binds_sub);
}

module.exports = sub2021;