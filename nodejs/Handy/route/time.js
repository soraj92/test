require('date-utils');

const time = function (req, res) {

    const newDate = new Date();
    const server_time = newDate.toFormat('YYYYMMDDHH24MISS');

    res.write(server_time);
    res.end();
}

module.exports.time = time;