var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tempSchema = new Schema({

    id: String,
    category: String,
    count: Number,
    /*userId: {
        type: Schema.Types.ObjectId,
        ref: 'clothe'
    }
    collectionTypeA: {
        type: Schema.Types.ObjectId,
        ref: 'clothe'
    },
    collectionTypeB: {
        type: Schema.Types.ObjectId,
        ref: 'mobile'
    },
    collectionTypeC: {
        type: Schema.Types.ObjectId,
        ref: 'sport'
    }*/
});

module.exports = mongoose.model('temp', tempSchema);

//console.log("into models");,