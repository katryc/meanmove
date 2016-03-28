var restful = require('node-restful');
module.exports = function(app, route) {


//pass the model to the restful module
// Setup the controller for REST.
 var rest = restful.model(
   'meanmove',
   app.models.meanmove
 ).methods(['get', 'put', 'post', 'delete']);

 // Register this endpoint with the application.
 rest.register(app, route);

 // Return middleware.
 return function(req, res, next) {
   next();
 };
};
