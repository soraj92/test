let route_loader = {};

const config = require('../config.js');

route_loader.init = function (app, router) {
    console.log('route_loader.init 호출');

    initRoutes(app, router);
};

function initRoutes(app, router) {
    const infoLen = config.route_info.length;
    console.log('설정에 정의된 라우팅 모듈의 수 : ' + infoLen);

    for (var i = 0; i < infoLen; i++) {
        const curItem = config.route_info[i];
        const curModule = require(curItem.file);

        if (curItem.type == 'post') {
            router.route(curItem.path).post(curModule.logistics);
        } else if (curItem.type == 'get') {
            router.route(curItem.path).get(curModule.time);
        } else
            console.log('post가 아님');
    }
    app.use('/', router);
}

module.exports = route_loader;