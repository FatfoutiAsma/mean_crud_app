const mongoose = require('mongoose');

//create model and define a schema to it
var Employee = mongoose.model('Employee', {
  name: {type: String},
  position: {type: String},
  office: {type: String},
  salary: {type: Number}
});

module.exports = { Employee };
