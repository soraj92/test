const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const static = require('serve-static');
const app = express();
const router = express.Router();
const config = require('./config');
const mariaSql = require('mariasql');
const conn = new mariaSql();
const route_loader = require('./route/route_loder');

const oracledb = require('oracledb');

oracledb.getConnection({
    user: "soraj92",
    password: "s79e3po5",
    connectString: "soraj92.crscibn3vj7r.ap-northeast-2.rds.amazonaws.com/ORCL"
}, function (err, connection) {
    if (err) {
        console.error(err.message);
        return;
    }

    console.log('연결 성공');
});


function Connection() {
    conn.connect({
        host: "localhost",
        port: 3306,
        user: "root",
        password: '12345',
        database:"data",
        db:"test"
    });

    conn.on('ready', function(){
        console.log('연결');
    });
    conn.on('error', function(err){
        console.log(err);
    });

    conn.on('end', function(){
        console.log("end");
    });

    conn.on('close', function(){
        console.log("close");
    });
}

app.set('port', process.env.PORT || config.server_port);
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended : false}));

// router.route('/logistics/hlc').post(function (req, res) {

//     let body = [];
//     req.on('data', function (chunk) {
//         body.push(chunk);
//     }).on('end', function () {
//         body = Buffer.concat(body).toString();

//         let info = body.split('\n');

//         let null_check = 0;
//         let idx = []; // bsc + inv
//         let code = [];
//         let bsc = []; // 집하스캔
//         let ptn = []; // 상대점소
//         let inv = []; // 운송장
//         let scan_m = []; //스캔 사원
//         let car = []; // 차량
//         let s_day = []; // 스캔 날
//         let s_time = []; // 스캔 시간
//         let via = []; //경유 구분
//         let line = []; // line
//         let serial = []; // 시리얼
//         let mgr = []; //연계일보(있을수 있고 없을수 있꼬)

//         for (var i = 0; i < info.length; i++) {
//             if(!info[i])
//             {
//                 null_check = i;
//                 break;
//             }

//             code.push(info[i].substring(0, 2).trim());
//             bsc.push(info[i].substring(2, 7));
//             ptn.push(info[i].substring(7, 12));
//             inv.push(info[i].substring(12, 24).trim());
//             scan_m.push(info[i].substring(24, 32));
//             car.push(info[i].substring(32, 37));
//             s_day.push(info[i].substring(37, 45));
//             s_time.push(info[i].substring(45, 51));
//             via.push(info[i].substring(51, 53).trim());
//             line.push(info[i].substring(53, 55));
//             serial.push(info[i].substring(55, 59));

//             if(info[i].length == 71)
//             {
//                 mgr.push(info[i].substring(59, 71));
//             }else {
//                 mgr.push("");
//             }

//             idx.push(bsc[i]+inv[i]);
//         }

//         for(var i = 0; i <null_check; i++) {                
            
//             conn.query("insert into test.code"+code[i]+ 
//              " (idx, BSC_BRNSHP_CD, PTN_BRNSHP_CD, INV_NO, SCAN_EMP, CAR_CD , SCAN_DAY , SCAN_TIME, VIA_YN, LINE, SERIAL_NO, MGR_NO, reg_date, update_date)"
//              +"values('"+idx[i] + "' ,'" + bsc[i] + "' ,'" + ptn[i] + "' ,'" + inv[i] + "' ,'" + scan_m[i] + "' ,'" + car[i] + "' ,'" + s_day[i] + "' ,'" 
//              + s_time[i] + "' ,'" + via[i] + "' ,'" + line[i] + "' ,'" + serial[i] + "' ,'" + mgr[i]+"',now(),now())"
//             + " on duplicate key update send_cnt = send_cnt+1" 
//             , function(err, res) {
//                     if(err) {              
//                             console.log(err);         
//                             process.on('uncaughtException', function(err){
//                                 console.log("err : " + err);
//                             });
//                     }else{
//                         console.log(res.info.affectedRows);
//                       //  console.log(res.info.affectedRows == 1);
//                     }
//                 });

//         }

//         //Connection();
//     });
// });

// app.use('/', router);
http.createServer(app).listen(app.get('port'), function () {
    console.log('서버 실행 : ' + app.get('port'));
    Connection();
    route_loader.init(app, router);
});
