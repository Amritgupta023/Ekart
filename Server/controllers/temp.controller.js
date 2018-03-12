var temp_controller=require('../services/temp.service');

exports.findAll = function(req, res) {
    return temp_controller.findAll();
}

exports.insertAll = function(data) {
    return temp_controller.insertAll(data);
};

exports.findOne = function(id) {
    return temp_controller.findOne(id);
}

exports.deleteOne = function(id) {
    return temp_controller.deleteOne(id);
}

exports.findOneAndUpdate=function(id,body){
	return temp_controller.findOneAndUpdate(id,body);
}

/*exports.updateData = function(uid,qty,types)
{
return temp_controller.updateData(uid,qty,types);
};*/
