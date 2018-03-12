var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sportsSchema = new Schema({
    id:String,
    name:String,
    type:String,
    brand:String,
    price:Number,
    warranty:String,
    image:[],
    features:{
        Material:String,
        color:String

    },
    reviews:[{title:String,comment:String},{title:String,comment:String}]
    });

module.exports = mongoose.model('sport', sportsSchema);