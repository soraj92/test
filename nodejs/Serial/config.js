module.exports = {
    server_port : 3000,

    route_info : [
        {file:'./user', path:'/serial/check', method:'check', type:'get'}
    ],

    db_schema : [
        {file:'./serial_schema', collection: 'serial', schemaName: 'SerialSchema', modelName: 'SerialModel'}
    ]
    , db_url : 'mongodb://localhost:27017/local'
}