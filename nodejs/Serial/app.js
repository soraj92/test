const express = require('express');
const http = require('http');
const path = require('path');
const bodyparser = require('body-parser');
const static = require('serve-static');
const app = express();
const router = express.Router();
const route_loader = require('./route/route_loader');
const config = require('./config');
const database = require('./database/database');


app.set('port', process.env.PORT || config.server_port);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
//app.use('/public', static(path.join(__dirname, 'public')));


http.createServer(app).listen(app.get('port'), function() {
    console.log('서버 실행');
    database.init(app, config);
    route_loader.init(app, router);
});