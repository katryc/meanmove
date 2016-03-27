var restful = require('node-restful');

module, exports = function(app, route){


//pass the model to the restful module
  var rest = restful.model('meanmove', app.models.meanmove).methods(['get', 'put', 'post', 'delete']);

//register the restful API for the injected app into the controller
  rest.register(app,route);
//for every injection on the requestt we use custom features with the help of middleware
   return function(req, res, next){
     next();
   };

};
