const mongoose = require('mongoose');
const Schema = mongoose.Schema

var childSchema = new Schema({
  firstName: String,
  lastName: String,
  shirtSize: String,
  pantSize: String,
  shoeSize: String,
  glasses: Boolean,
  hats: Boolean,
  underWear: Boolean,
  belts: Boolean,
  description: String
})

var Child = mongoose.model('child', childSchema)


module.exports = Child
