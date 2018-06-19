let info = {};

info.init = function(body, callback) {
    body = Buffer.concat(body).toString();
    const info = body.split('\n');

    console.log('info.init');
    setTimeout(function(){}, 3000);
    console.log('info - settimeout');
    callback(info);
}

module.exports = info;