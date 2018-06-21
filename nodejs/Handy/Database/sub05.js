let sub2021 = {};

sub2021.init = function (oracledb, connection, binds) {
    const sql = "BEGIN CODE05TEST( :P_BSC_BRNSHP_CD, :P_INV_NO, :P_BPCK_SCT, :P_SCAN_EMP, :P_SCAN_YMD, :P_SCAN_TME,  :P_CAR_CD, :P_SERIAL_NO, :P_RET_CODE, :P_RET_MESG); END;"

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
                type: oracledb.NUMBER,
                dir: oracledb.BIND_OUT,
                type: oracledb.STRING,
                maxSize: 16
            },
            {
                type: oracledb.STRING,
                maxSize: 18,
                dir: oracledb.BIND_OUT,
                type: oracledb.STRING,
                maxSize: 16
            } // size of the largest string, or as close as possible
        ]
    };

    start(connection, sql, binds, options);
}

function start(connection, sql, binds, options) {
    connection.executeMany(sql, binds, options, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.dir(result);
    });
}

module.exports = sub2021;