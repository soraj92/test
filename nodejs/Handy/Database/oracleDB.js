let oracle = [];

oracle.init = function (total_binds, callback) {

const oracledb = require('oracledb');

oracledb.getConnection({
    user: "soraj92",
    password: "s79e3po5",
    connectString: "soraj92.crscibn3vj7r.ap-northeast-2.rds.amazonaws.com/ORCL"
}, function (err, connection) {
    if (err) {
        console.error(err.message);
        return;
    }

    var sql = "BEGIN CODE20TEST(:P_JOB_SCT, :P_BSC_BRNSHP_CD, :P_PTN_BRNSHP_CD, :P_INV_NO, :P_SCAN_EMP, :P_CAR_CD, :P_SCAN_YMD, :P_SCAN_TME, :P_VIA_YN, :P_SERIAL_NO, :P_MGR_NO, :P_RET_CODE, :P_RET_MESG); END;"
    var options = {
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
    console.log('연결 성공');
    connection.executeMany(sql, total_binds[3], options, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.dir(result);
        callback(null, body);
    });
});
});

};

module.exports = oracle;