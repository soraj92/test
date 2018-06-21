let sub32 = {};

sub32.init = function (info, callback) {
    
    let binds = [];

    infoSubString(info, binds);
    callback(binds);
}

function infoSubString(info, binds) {

    var binds_sub = [];

    const code = info.substring(0, 2).trim(); // 작업 구분

    const bsc = info.substring(2, 7); // 집하 스캔
    binds_sub.push(bsc);

    const inv = info.substring(7, 19).trim(); // 운송장
    binds_sub.push(inv);

    const scan_m = info.substring(19, 27); // 스캔 사원
    binds_sub.push(scan_m);

    const s_day = info.substring(27, 35); // 스캔 일자
    binds_sub.push(s_day);

    const s_time = info.substring(35, 41); // 스캔 시간
    binds_sub.push(s_time);

    const line = info.substring(41, 43); // line
    const serial = info.substring(43, 47); // serial
    binds_sub.push(line + serial); // 단말기

    const idx = bsc + inv;
    binds.push(binds_sub);
}

module.exports = sub32;