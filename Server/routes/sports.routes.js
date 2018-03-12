var sports_routes = require('../controllers/sports.controller.js');

module.exports = function(app) {
    app.get('/sports', function(req, res) {
        sports_routes.findAll().then(function(resp) {
            //res.send(resp);
            res.json(resp);
        })

    });

    app.post("/addSports", function(req, res) {
        sports_routes.insertAll(req.body).then(function(resp) {
            res.send(resp);
        }).catch(function(err) {
            res.send('error occured');
        })
    });

    app.get("/sports/:id",function(req,res){
    	
        sports_routes.findOne(req.params.id).then(function(resp){
        	res.send(resp);
        }).catch(function(err){
        	res.send("Error Occured..");
        })

    });

    app.delete("/sports/:id",function(req,res){
    	sports_routes.deleteOne(req.params.id).then(function(resp){
    		res.send(resp);
    	}).catch(function(err){
    		res.send("Error Occureddd...");
    	})
    });
   /* app.put("/mobiles/:id",function(req,res){
    	sports_routes.updateOne(req.params.id).then(function(resp){
    		res.send(resp);
    	}).catch(function(err){
    		res.send("Error Occured in Update Value");
    	})
    })*/
}