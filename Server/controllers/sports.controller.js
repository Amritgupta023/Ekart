var sport_service = require('../services/sport.service');


exports.findAll = function(req, res) {
    return sport_service.findAll();
}

exports.insertAll = function(data) {
    return sport_service.insertAll(data);
};

exports.findOne = function(id) {
    return sport_service.findOne(id);
}

exports.deleteOne = function(id) {
    return sport_service.deleteOne(id);
}
/*
exports.updateOne = function(id) {
    return mobile_service.updateOne(id);
}*/