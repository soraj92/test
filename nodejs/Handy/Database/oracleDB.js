let oracle = [];

oracle.init = function (total_binds, callback) {
    
    const oracledb = require('oracledb');
    const config = require('../config');
    console.log(config.oracle_info.u)
    oracledb.getConnection({
        user: config.oracle_info.user,
        password: config.oracle_info.password,
        connectString: config.oracle_info.connectString
    }, function (err, connection) {
        if (err) {
            console.error(err.message);
            return;
        }
    });

};

module.exports = oracle;