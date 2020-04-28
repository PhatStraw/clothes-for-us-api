const mongoose = require('mongoose');
const Schema = mongoose.Schema

var receiverSchema = new Schema({
  firstName: String,
  lastName: String,
  streetAddress: String,
  postalCode: String,
  state: String,
  city: String
})

var Receiver = mongoose.model('receiver', receiverSchema)


module.exports = Receiver
