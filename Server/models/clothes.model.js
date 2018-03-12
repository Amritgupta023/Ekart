var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clothesSchema = new Schema({
    id: String,
    name: String,
    gender: String,
    brand: String,
    price: Number,
    desc: {
        color: { type: String },
        fabric: { type: String },
        type: { type: String },
        pattern: { type: String }
    },
    image: [],
    reviews: [{ by: String, comment: String }, { by: String, comment: String }, { by: String, comment: String }]
});

module.exports = mongoose.model('clothe', clothesSchema);