module.exports = {
    server_port : 3000,

    route_info : [
        {file:'./user', path:'/serial/check', method:'check', type:'get'}
    ],

    db_schema : [
        {file:'./user_schema', collection: 'serial', schemaName: 'SerialSchema', model: 'SerialModel'}
    ]
    , db_url : ''
}