
//the interface of Mongo that helps to provide the created data directly to DB
var mongoose = require('mongoose');

// Create the schema
var MeanMoveSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

// Export the model
//everytime we create a new node.js component, we need to make sure that the require
//sends what ever you want to pass back

module.exports = mongoose.model('meanmove', MeanMoveSchema);
