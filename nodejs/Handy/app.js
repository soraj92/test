const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const static = require('serve-static');
const app = express();
const router = express.Router();
const config = require('./config');
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

app.set('port', process.env.PORT || config.server_port);
app.use(bodyParser.json());

http.createServer(app).listen(app.get('port'), function () {
    console.log('서버 실행 : ' + app.get('port'));
    route_loader.init(app, router);
});
