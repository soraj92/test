const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const router =  express.Router();
const mariaSql = require('mariasql');
const conn = new mariaSql();

app.set('port', 3005);
app.use(bodyParser.urlencoded({extended : false}));

router.route('/test').post(function (req, res) {
        console.log("test접속");
        let body = [];
        req.on('data', function (chunk) {
                 body.push(chunk);
         }).on('end', function () {
                 body = Buffer.concat(body).toString();

                 setTimeout(function() {
         
         
                     console.log("body : " + body);
         
                 }, 6000);
         });
});

app.use('/',router);

http.createServer(app).listen(app.get('port'), function() {
    console.log('서버 실행 : ');

});