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

        console.log(binds[0][1]);
        console.log(binds[1][1]);
        console.log(binds[2][1]);
        console.dir(result.outBinds);
        callback();
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