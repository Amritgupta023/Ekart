var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mobileSchema = new Schema({
    id: String,
    name: String,
    brand: String,
    image: [],
    price: Number,
    features: {
        screen: { type: String },
        processor: { type: String },
        os: { type: String },
        battery: { type: String },
        camera: { type: String },
        ram: { type: String },
        rom: { type: String },
        warranty: { type: String },
        color: { type: String }
    },
    desc: String,
    reviews: [{ title: String, comment: String }, { title: String, comment: String }, { title: String, comment: String }],

});

module.exports = mongoose.model('mobile', mobileSchema);