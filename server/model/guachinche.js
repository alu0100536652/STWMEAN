var mongoose = require('mongoose');

var guachincheSchema = new mongoose.Schema({
  name: String,
  direction: String,
  city: String
}, 
{ 
  versionKey: false
})

module.exports = mongoose.model('Guachinche', guachincheSchema);