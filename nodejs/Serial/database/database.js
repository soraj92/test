const mongoose = require('mongoose');

let database = {};

database.init = function(app, config) {
    console.log('init() 호출');

    connect(app, config);
};

function connect(app, config) {
    console.log('connect() 호출');

    mongoose.connect(config.db_url);
    database.db = mongoose.connection;

    database.db.on('error', console.error.bind(console, 'mongoose connection error'));
    database.db.on('open', function() {
        console.log('데이터베이스에 연결됨 : ' + config.db_url);

        createSchema(app, config);
    });

    database.db.on('disconnected', connect);
}

function createSchema(app, config) {
    const schemaLen = config.db_schema.length;

    console.log('정의된 스키마의 수 : %d', schemaLen);

    for(var i = 0; i < schemaLen; i++) {
        const curItem = config.db_schema[i];
        const curSchema = require(curItem.file).createSchema(mongoose);

        const curModel = mongoose.model(curItem.collection, curSchema,'serial');

        database[curItem.schemaName] = curSchema;
        database[curItem.modelName] = curModel;
    }

    app.set('database', database);
}

module.exports = database;