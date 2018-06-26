let sub23 = {};

sub23.init = function (oracledb, connection, binds, callback) {
    const sql = "BEGIN SP_RF_LGL_AUTO_RLTD_MAIN( :P_MST_INV_NO, :P_ROLT_NO, :P_INV_NO, :P_SCAN_EMP, :P_SCAN_YMD, :P_SCAN_TME,  :P_SERIAL_NO, :P_RET_CODE, :P_RET_MESG); END;"

    const options = {
        autoCommit: true, // autocommit if there are no batch errors
        bindDefs: [ // describes the data in 'binds'
            {
                type: oracledb.STRING,
                maxSize: 16
            },
            {
                type: oracledb.STRING,
                maxSize: 16
            },
            {
                type: oracledb.STRING,
                maxSize: 16
            },
            {
                type: oracledb.STRING,
                maxSize: 16
            },
            {
                type: oracledb.STRING,
                maxSize: 16
            },
            {
                type: oracledb.STRING,
                maxSize: 16
            },
            {
                type: oracledb.STRING,
                maxSize: 16
            },
            {
                type: oracledb.NUMBER,
                dir: oracledb.BIND_OUT
            },
            {
                dir: oracledb.BIND_OUT,
                type: oracledb.STRING,
                maxSize: 16
            } // size of the largest string, or as close as possible
        ]
    };

    start(connection, sql, binds, options, function (result) {
        const log = require('../common/pbox-logger');
        const logger = new log();

        for(let i = 0; i < binds.length; i++) {
            logger.logger.info("운반 : " + binds[i][1] + " / 송장 : " + binds[i][2] + " / 결과 : " + result.outBinds[i][0] + " / 메시지 : " + result.outBinds[i][1]);

            if(i == binds.length)
                callback();
        }
    });
}

function start(connection, sql, binds, options, callback) {
    connection.executeMany(sql, binds, options, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.dir(result);
        callback(result);
    });
}

module.exports = sub23;