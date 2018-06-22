const date = require('date-utils');

const time = function (req, res) {

    const newDate = new date();
    const server_time = newDate.toFormat('YYYY-MM-DD HH24:MI:SS');

    res.write(server_time);
    res.end();
}

module.exports.time = time;