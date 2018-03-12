var mobile_routes = require('../controllers/mobiles.controller.js');

module.exports = function(app) {
    app.get('/mobiles', function(req, res) {
        mobile_routes.findAll().then(function(resp) {
            //res.send(resp);
            res.json(resp);
        })

    });

    app.post("/addMobiles", function(req, res) {
        mobile_routes.insertAll(req.body).then(function(resp) {
            res.send(resp);
        }).catch(function(err) {
            res.send('error occured');
        })
    });

    app.get("/mobiles/:id",function(req,res){
    	
        mobile_routes.findOne(req.params.id).then(function(resp){
        	res.send(resp);
        }).catch(function(err){
        	res.send("Error Occured..");
        })

    });

    app.delete("/mobiles/:id",function(req,res){
    	mobile_routes.deleteOne(req.params.id).then(function(resp){
    		res.send(resp);
    	}).catch(function(err){
    		res.send("Error Occureddd...");
    	})
    });
    app.put("/mobiles/:id",function(req,res){
    	mobile_routes.updateOne(req.params.id).then(function(resp){
    		res.send(resp);
    	}).catch(function(err){
    		res.send("Error Occured in Update Value");
    	})
    })
}