let oracle = [];

oracle.init = function (total_binds, callback) {
    
    const oracledb = require('oracledb');
    const config = require('../config');

    oracledb.getConnection({
        user: config.oracle_info.user,
        password: config.oracle_info.password,
        connectString: config.oracle_info.connectString,
        port : 1521
    }, function (err, connection) {
        if (err) {
            console.error(err.message);
            return;
        }
    });

};

module.exports = oracle;