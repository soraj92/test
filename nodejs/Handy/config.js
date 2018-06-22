const config = {
    server_port: 3010,

    route_info: [{
        file: './handy',
        path: '/logistics/hlc',
        type: 'post',
        method: 'logistics'
    }, {
        file: './time',
        path: '/logistics/Time',
        type: 'get',
        method: 'time'
    }],
    oracle_info: [{
        user: "soraj92",
        password: "s79e3po5",
        connectString: "soraj92.crscibn3vj7r.ap-northeast-2.rds.amazonaws.com/ORCL"
    }]
};

module.exports = config;