//console.log("hello world in clothes controller");

var clothes_controller=require('../controllers/clothes.controller');

module.exports = function(app) {
    app.get('/clothes', function(req, res) {
        clothes_controller.findAll().then(function(resp) {
            //res.send(resp);
            res.json(resp);
        })

    });

    app.post("/addclothes", function(req, res) {
        clothes_controller.insertAll(req.body).then(function(resp) {
            res.send(resp);
        }).catch(function(err) {
            res.send('error occured');
        })
    });

    app.get("/clothes/:id",function(req,res){
    	
        clothes_controller.findOne(req.params.id).then(function(resp){
        	res.send(resp);
        }).catch(function(err){
        	res.send("Error Occured..");
        })

    });

    app.delete("/clothes/:id",function(req,res){
    	clothes_controller.deleteOne(req.params.id).then(function(resp){
    		res.send(resp);
    	}).catch(function(err){
    		res.send("Error Occureddd...");
    	})
    });
   /* app.put("/mobiles/:id",function(req,res){
    	clothes_controller.updateOne(req.params.id).then(function(resp){
    		res.send(resp);
    	}).catch(function(err){
    		res.send("Error Occured in Update Value");
    	})
    })*/
}