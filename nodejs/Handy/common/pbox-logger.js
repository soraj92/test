const winston = require('winston');
const rotate = require('winston-daily-rotate-file');
const path = require('path');
require('date-utils');

function Logger() {
    this.infodir = path.join('/home/ec2-user/Log/PboxLog','%DATE%.log');
    //this.errdir = path.join('/home/ec2-user/PboxLog','error','%DATE%.log');
    this.logger = winston.createLogger({
        transports : [
            new (rotate)({
                name:'infoLog',
                level:'info',
                filename: this.infodir,
                datePattern: 'YYYYMMDD',
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