let oracle = [];

oracle.init = function (total_binds, callback) {

    const oracledb = require('oracledb');
    let check = 0;

    oracledb.getConnection({
        user: "soraj92",
        password: "s79e3po5",
        connectString: "soraj92.crscibn3vj7r.ap-northeast-2.rds.amazonaws.com/ORCL"
    }, function (err, connection) {
        if (err) {
            console.error(err.message);
            return;
        }

        let start;

        for (var i = 0; i < total_binds.length; i++) {
            if (i == 0)
                start = require('./sub05');
            else if (i == 1)
                start = require('./sub10');
            else if (i == 2)
                start = require('./sub113142');
            else if (i == 3)
                start = require('./sub2021');
            else if (i == 4)
                start = require('./sub23');
            else if (i == 5)
                start = require('./sub2425');
            else if (i == 6)
                start = require('./sub32');
            else if (i == 7)
                start = require('./sub40');
            else if (i == 8)
                start = require('./sub41');

            if (total_binds[i].length != 0) {

                start.init(oracledb, connection, total_binds[i], function () {
                    check++;

                    if (check == 9)
                        callback();
                });
            } else check++;
        }
    });

};

module.exports = oracle;