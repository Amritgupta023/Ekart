var mobile_service = require('../services/mobile.service');


exports.findAll = function(req, res) {
    return mobile_service.findAll();
}

exports.insertAll = function(data) {
    return mobile_service.insertAll(data);
};

exports.findOne = function(id) {
    return mobile_service.findOne(id);
}

exports.deleteOne = function(id) {
    return mobile_service.deleteOne(id);
}

exports.updateOne = function(id) {
    return mobile_service.updateOne(id);
}