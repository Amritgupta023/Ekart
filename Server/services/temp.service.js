var temp_model = require('../models/temp.model');

var Q = require('q');

exports.insertAll = function(allData) {
    console.log("allData", allData);
    var defer = Q.defer();
    temp_model.insertMany(allData, function(err, data) {
        if (err) {
            defer.reject('Error in saving All data');
        } else {
            defer.resolve(data);
        }
    });
    return defer.promise;
};


exports.deleteOne = function(id) {
    var response = {
        err: null,
        result: null
    };
    var defer = Q.defer();
    temp_model.findOneAndRemove({
        id: id
    }, function(err, data) {
        if (err) {
            response.err = err;
        } else {
            response.result = data;
        }
        defer.resolve(response);

    });
    return defer.promise;

}


exports.findAll = function(req, res) {
    var response = {
        err: null,
        result: null
    };
    var defer = Q.defer();
    temp_model.find({}, function(err, data) {
        if (err) {
            response.err = err;
        } else {
            response.result = data;
        }
        defer.resolve(response);

    });
    return defer.promise;
};

exports.findOneAndUpdate = function(id, body) {
    var response = {
        err: null,
        result: null
    };
    var defer = Q.defer();
    temp_model.findOneAndUpdate({ id: id }, { $set: { count: body } }, { upsert: true },
        function(err, data) {
            if (err) {
                response.err = err;
            } else {
                response.result = data;
            }
            defer.resolve(response);
        });
    return defer.promise;
}

exports.findOne = function(id) {
    var response = {
        err: null,
        result: null
    };
    var defer = Q.defer();
    temp_model.findOne({ id: id }, function(err, data) {
        if (err) {
            response.err = err;
        } else {
            response.result = data;
        }
        defer.resolve(response);

    });
    return defer.promise;

}



/*exports.updateOne=function(id){
	var response = {
        err: null,
        result: null
    };
    var defer=Q.defer();
    mobile_model.findOneAndUpdate({id:id},{$set:{name:title}},{upsert:true},
    	function(err,data){
    		if(err){
    			response.err=err;
    		}
    		else{
    			response.result=data;
    		}
    		defer.resolve(response);
    	});
    return defer.promise;
}*/