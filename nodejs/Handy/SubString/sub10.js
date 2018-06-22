let sub10 = {};

sub10.init = function (info, callback) {
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

    const sub_inv = info.substring(19, 31).trim(); // 보조 운송장
    binds_sub.push(sub_inv);

    const svc_code = info.substring(31, 33).trim(); // 서비스 코드
    binds_sub.push(svc_code);

    const filt_code = info.substring(33, 37).trim(); // 도착지 코드
    binds_sub.push(filt_code);

    const scan_m = info.substring(37, 45); // 스캔 사원
    binds_sub.push(scan_m);

    const s_day = info.substring(45, 53); // 스캔 일자
    binds_sub.push(s_day);

    const s_time = info.substring(53, 59); // 스캔 시간
    binds_sub.push(s_time);

    const car = info.substring(59, 64); // 차량 코드
    binds_sub.push(car);

    const pay = info.substring(64, 66).trim(); // 현불
    binds_sub.push(pay);

    const fare = parseInt(info.substring(66, 73).trim()); // 운임
    binds_sub.push(fare);

    const line = info.substring(73, 75); //line
    const serial = info.substring(75, 79); // serial
    binds_sub.push(line + serial); //단말기


    const idx = bsc + inv;
    binds.push(binds_sub);
}
module.exports = sub10;