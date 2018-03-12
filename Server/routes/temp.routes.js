var temp_controller = require('../controllers/temp.controller');

module.exports = function(app) {
    app.get('/items', function(req, res) {
        temp_controller.findAll().then(function(resp) {
            //res.send(resp);
            res.json(resp);
        })

    });

    app.get('/items/:id', function(req, res) {
        temp_controller.findOne(req.params.id).then(function(resp) {
            //res.send(resp);
            res.json(resp);
        })

    });

    app.post("/items", function(req, res) {
        temp_controller.insertAll(req.body).then(function(resp) {
            res.send(resp);
        }).catch(function(err) {
            res.send('error occured');
        })
    });

    app.delete("/items/:id", function(req, res) {
        temp_controller.deleteOne(req.params.id).then(function(resp) {
            res.send(resp);
        }).catch(function(err) {
            res.send("Error Occureddd...");
        })
    });

    app.put('/items/:id', function(req, res) {
        temp_controller.findOneAndUpdate(req.params.id,req.body.count ).then(function(resp) {
            res.send(resp);
            console.log("hello world.",req.body.count);
        }).catch(function(err) {
            res.send("Error Occureddd...");
        })
    });


}