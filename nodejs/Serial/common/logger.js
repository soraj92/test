const winston = require('winston');
const utils = require('date-utils');
const rotate = require('winston-daily-rotate-file');
const path = require('path');
const dir = path.join(__dirname,'..');

const logger = new (winston.Logger)({
    transports : [
        new (rotate)({
            name:'infoLog',
            level:'info',
            filename: path.join(dir,'/log/infoLog/info_%DATE%.log'),
            datePattern: 'YYYY-MM-DD',
            prepend:true,
            maxsize:107374182400, //byte기준
            maxFiles:30,
            timestamp: function(){return new Date().toFormat('YYYY-MM-DD HH24:MI:SS')},
            json:false
        }),
        new (rotate)({
            name: 'errorLog',
            level:'error',
            filename: path.join(dir,'/log/errorLog/error_%DATE%.log'),
            datePattern: 'YYYY-MM-DD',
            maxsize:1000000,
            maxFiles:30,
            timestamp: function(){return new Date.toFormat('YYYY-MM-DD HH24:MI:SS')},
            json:false
        })
    ]
});

module.exports = logger;