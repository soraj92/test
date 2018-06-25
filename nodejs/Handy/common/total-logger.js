const winston = require('winston');
const rotate = require('winston-daily-rotate-file');
const path = require('path');

function Logger(collection) {
    this.infodir = path.join(__dirname,'..','log','total',collection,'%DATE%.log');
    this.errdir = path.join(__dirname,'..','log','error','%DATE%.log');
    this.logger = winston.createLogger({
        transports : [
            new (rotate)({
                name:'infoLog',
                level:'info',
                filename: this.infodir,
                datePattern: 'YYYYMMDD',
                prepend:true,
                maxsize:107374182400, //byte기준
                maxFiles:31,
                timestamp: function(){return new Date().toFormat('YYYY-MM-DD HH24:MI:SS')},
                json:false
            }),
            new (rotate)({
                name: 'errorLog',
                level:'error',
                filename: this.errdir,
                datePattern: 'YYYY-MM-DD',
                maxsize:1000000,
                maxFiles:31,
                timestamp: function(){return new Date.toFormat('YYYY-MM-DD HH24:MI:SS')},
                json:false
            })
        ]
    });
}

module.exports = Logger;