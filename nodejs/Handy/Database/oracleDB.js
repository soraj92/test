const oracledb = require('oracledb');

let oracle = [];

oracle.init = function (total_binds, callback) {

    oracledb.getConnection({
        user: "soraj92",
        password: "s79e3po5",
        connectString: "soraj92.crscibn3vj7r.ap-northeast-2.rds.amazonaws.com/ORCL"
    }, function (err, connection) {
        if (err) {
            console.error(err.message);
            return;
        }
    });

};

module.exports = oracle;