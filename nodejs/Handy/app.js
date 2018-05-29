const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const static = require('serve-static');
const app = express();
const router = express.Router();
const config = require('./config');

app.set('port', process.env.PORT || config.server_port);
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended : false}));

router.route('/logistics/hlc').post(function(req,res) {

    console.log('들어옴');

    let body = [];
    req.on('data', function(chunk){
        console.log('data?');
        body.push(chunk);
    }).on('end', function() {
        console.log('end?');
        body = Buffer.concat(body).toString();

        console.log(body);
    });

    console.log('비동기');

    res.write('1');
    res.end();
    // const a = req.body;
    // console.dir(a);
    // const b = Object.getOwnPropertyNames(a);

    // const c = b[0].split('\n');
    // for(var i = 0; i <c.length; i++)
    //     console.log(c[i]);

});

router.route('/logistics/hlc').get(function(req,res) {

    console.log('들어옴');
    console.dir(req);
    res.write('1');
    res.end();

    // const a = req.body;
    // console.dir(a);
    // const b = Object.getOwnPropertyNames(a);

    // const c = b[0].split('\n');
    // for(var i = 0; i <c.length; i++)
    //     console.log(c[i]);

});

app.use('/',router);
http.createServer(app).listen(app.get('port'), function() {
    console.log('서버 실행 : ' + app.get('port'));
});