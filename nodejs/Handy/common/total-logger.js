const winston = require('winston');
const rotate = require('winston-daily-rotate-file');
const path = require('path');

function Logger(collection) {
    this.infodir = path.join('/home/ec2-user/HandyLog','total',collection,'%DATE%.log');
    this.errdir = path.join('/home/ec2-user/HandyLog','error','%DATE%.log');
    this.logger = winston.createLogger({
        transports : [
            new (rotate)({
                name:'infoLog',
                level:'info',
                filename: this.infodir,
                datePattern: 'YYYYMMDD',
                prepend:true,
                maxsize:"500m", //m - 메가
                maxFiles:100, //100개
                timestamp: function(){return new Date().toFormat('YYYY-MM-DD HH24:MI:SS')},
                format: winston.format.combine(
					winston.format.printf(info=> info.message)
				)
            })
        ]
    });
}

module.exports = Logger;