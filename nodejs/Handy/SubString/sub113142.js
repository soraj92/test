let sub113142 = {};

sub113142.init = function (info, callback) {
    
    let binds = [];

    infoSubString(info, binds);
    callback(binds);
}

function infoSubString(info, binds) {
    
    var binds_sub = [];

    
    const bsc = info.substring(2, 7); // 집하 스캔
    binds_sub.push(bsc);
    
    const inv = info.substring(7, 19).trim(); // 운송장
    binds_sub.push(inv);
    
    const code_dly = info.substring(0, 2).trim(); // 작업 구분, 지연 사유 종류
    binds_sub.push(code_dly);

    const dly_rea = info.substring(19, 21).trim(); // 지연 코드 값
    binds_sub.push(dly_rea);

    const scan_m = info.substring(21, 29); // 스캔 사원
    binds_sub.push(scan_m);

    const s_day = info.substring(29, 37); // 스캔 일자
    binds_sub.push(s_day);

    const s_time = info.substring(37, 43); // 스캔 시간
    binds_sub.push(s_time);

    const car = info.substring(43, 48); // 차량 코드
    binds_sub.push(car);

    const line = info.substring(48, 50); // line
    const serial = info.substring(50, 54); // serial
    binds_sub.push(line + serial); // 단말기

    const idx = bsc + inv;
    binds.push(binds_sub);
}

module.exports = sub113142;