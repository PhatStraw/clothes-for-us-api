const mongoose = require('mongoose');
const Schema = mongoose.Schema

var senderSchema = new Schema({
  firstName: String,
  lastName: String,
  streetAddress: String,
  postalCode: String,
  state: String,
  city: String
})

var Sender = mongoose.model('sender', senderSchema)


module.exports = Sender
