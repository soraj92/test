let route_loader = {};

const config = require('../config');

route_loader.init = function(app, router) {
    console.log('route_loader.init 호출');

    initRoutes(app, router);
}

function initRoutes(app, router) {
    const infoLen = config.route_info.length;
    console.log('설정에 정의된 라우팅 모듈의 수 : %d', infoLen);

    for(var i = 0; i < infoLen; i++) {
        const curItem = config.route_info[i];
        const curModule = require(curItem.file);
        console.log('%s 파일에서 모듈 정보 읽어옴', curItem.file);

        if(curItem.type == 'get')
            router.route(curItem.path).get(curModule[curItem.method]);
        else if(curItem.type == 'post')
            router.route(curItem.path).post(curModule[curItem.method]);
        else
            router.route(curItem.path).post(curModule[curItem.method]);
        
            console.log('라우팅 모듈 [%s]이(가) 설정됨', curItem.method);
    }

    app.use('/',router);
}

module.exports = route_loader;