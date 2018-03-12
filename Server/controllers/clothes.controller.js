var clothes_services = require('../services/clothes.service');
//console.log("into clothes controllers..");

exports.findAll = function(req, res) {
    return clothes_services.findAll();
}

exports.insertAll = function(data) {
    return clothes_services.insertAll(data);
};

exports.findOne = function(id) {
    return clothes_services.findOne(id);
}

exports.deleteOne = function(id) {
    return clothes_services.deleteOne(id);
}

/*exports.updateOne = function(id) {
    return clothes_services.updateOne(id);
}*/