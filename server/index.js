var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create the application.
var app = express();
// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));


// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
//add some content
app.use('/greet', function(req, res, next) {
  res.send('Welcome, user!')
  next();
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/hello');
mongoose.connection.once('open', function() {

  //dependancy inject the model without it even worying about controllers without
  //app.models

  app.models = require('./models/index');

  //Load routes

  var routes = require('./routes');
  //now iterate over all the created routes and find the controller that matches it
  //using lodash var
  _.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
     //the controller calls for middleware
   });

  //add the listener
  console.log('Listening on port 3000...');
  app.listen(3000);
});
