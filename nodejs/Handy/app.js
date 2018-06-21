const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const static = require('serve-static');
const app = express();
const router = express.Router();
const config = require('./config');
const route_loader = require('./route/route_loder');

app.set('port', process.env.PORT || config.server_port);
app.use(bodyParser.json());

http.createServer(app).listen(app.get('port'), function () {
    console.log('서버 실행 : ' + app.get('port'));
    route_loader.init(app, router);
});
