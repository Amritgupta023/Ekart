var mobiles_route = require('./mobiles.routes');
var clothes_route = require('./clothes.routes');
var sports_route = require('./sports.routes');
var temp=require('./temp.routes');

module.exports = function(app) {
    mobiles_route(app);
    clothes_route(app);
    sports_route(app);
    temp(app);
}