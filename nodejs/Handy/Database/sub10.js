let sub10 = {};

sub10.init = function (oracledb, connection, binds, callback) {
    const sql = "BEGIN SP_RF_HLC_PICK_MAIN( :P_SCAN_BRNSHP_CD, :P_MST_INV_NO, :P_SUB_INV_NO, :P_SVC_CD, :P_FILT_CD, :P_SCAN_EMP, :P_SCAN_YMD, :P_SCAN_TME,  :P_CAR_CD, :P_PAY_CON_CD, :P_SUM_FARE, :P_SERIAL_NO, :P_RET_CODE, :P_RET_MESG); END;"

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
                type: oracledb.NUMBER
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

    start(connection, sql, binds, options, function () {
        callback();
    });
}

function start(connection, sql, binds, options, callback) {
    connection.executeMany(sql, binds, options, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        callback();
    });
}

module.exports = sub10;