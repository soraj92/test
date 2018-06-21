let sub2425 = {};

sub2425.init = function (info, callback) {
    
    let binds = [];

    infoSubString(info, binds);
    callback(binds);
}

function infoSubString(info, binds) {
    
    var binds_sub = [];

    
    const bsc = info.substring(2, 7); // 집하 스캔
    binds_sub.push(bsc);
    
    const ptn = info.substring(7, 12).trim(); // 상대 점소
    binds_sub.push(ptn);
    
    const code = info.substring(0, 2).trim(); // 작업 구분
    binds_sub.push(code);

    const pbox = info.substring(12, 22).trim(); // P-BOX
    binds_sub.push(pbox);

    const inv = info.substring(22, 34).trim(); // 운송장
    binds_sub.push(inv);

    const scan_m = info.substring(34, 42); // 스캔 사원
    binds_sub.push(scan_m);

    const s_day = info.substring(42, 50); // 스캔 일자
    binds_sub.push(s_day);

    const s_time = info.substring(50, 56); // 스캔 시간
    binds_sub.push(s_time);

    const car = info.substring(56, 61); // 차량 코드
    binds_sub.push(car);

    const line = info.substring(61, 63); // line
    const serial = info.substring(63, 67); // serial
    binds_sub.push(line + serial); // 단말기

    const idx = bsc + inv;
    binds.push(binds_sub);
}

module.exports = sub2425;