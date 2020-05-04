const mongoose = require('mongoose');
const Schema = mongoose.Schema

var labelSchema = new Schema({
  created_at: {type: String, required: true},
  cost: {type: String, required: true},
  sender: {type: mongoose.Schema.Types.ObjectId, ref: 'sender'},
  receiver: {type: mongoose.Schema.Types.ObjectId, ref: 'receiver'},
  trackingNumber: {type: String, required: true}
})

var label = mongoose.model('label', labelSchema)


module.exports = label
