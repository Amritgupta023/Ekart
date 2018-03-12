var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var port = 4000;

var db = 'mongodb://localhost/shoppingCart'
mongoose.connect(db,function(err){
  if(err) throw err;
  console.log("mongoose Sucess full connected..");
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', express.static(path.join(__dirname, './../Client/public')));
require('./routes/main.routes')(app);

app.listen(port, function() {
  console.log('app listening on port ' + port);
});