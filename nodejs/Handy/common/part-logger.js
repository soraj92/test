const winston = require('winston');
const rotate = require('winston-daily-rotate-file');
const path = require('path');
require('date-utils');

function Logger(collection) {
    const newDate = new Date();
    const server_time = newDate.toFormat('YYYYMMDD');
    this.infodir = path.join('/home/ec2-user/HandyLog','part',server_time,collection,'%DATE%.log');
    this.errdir = path.join('/home/ec2-user/HandyLog','error','%DATE%.log');
    this.logger = winston.createLogger({
        transports : [
            new (rotate)({
                name:'infoLog',
                level:'info',
                filename: this.infodir,
                datePattern: 'HHmm',
                prepend:true,
                maxsize:"500m",
                maxFiles:100,
                timestamp: function(){return new Date().toFormat('YYYY-MM-DD HH24:MI:SS')},
                format: winston.format.combine(
					winston.format.printf(info=> info.message)
				)
            })
        ]
    });
}

module.exports = Logger;