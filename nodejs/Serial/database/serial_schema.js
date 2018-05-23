let Schema = {};

Schema.createSchema = function(mongoose) {

    const SerialSchema = mongoose.Schema({
        serial : {type:String, unique:true, required:true},
        company : {type:String, required:true},
        model : {type:String, required:true}
    });

    SerialSchema.static('serialcheck', function(serial, callback) {
       return this.find({serial: {'$regex':'^'+serial+'$','$options':'i'}}, callback);
    });

    return SerialSchema;
}

module.exports = Schema;