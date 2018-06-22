let sub41 = {};

sub41.init = function (info, callback) {

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

    const part = info.substring(19, 20); // 구분
    binds_sub.push(part);

    const scan_m = info.substring(20, 28); // 스캔 사원
    binds_sub.push(scan_m);

    const s_day = info.substring(28, 36); // 스캔 일자
    binds_sub.push(s_day);

    const s_time = info.substring(36, 42); // 스캔 시간
    binds_sub.push(s_time);

    const car = info.substring(42, 47); // 차량 코드
    binds_sub.push(car);

    const pay = info.substring(47, 49); // 착불
    binds_sub.push(pay);

    const fare = parseInt(info.substring(49, 56)); // 운임
    binds_sub.push(fare);

    const line = info.substring(56, 58); // line
    const serial = info.substring(58, 62); // serial
    binds_sub.push(line + serial); // 단말기

    const idx = bsc + inv;
    binds.push(binds_sub);
}

module.exports = sub41;