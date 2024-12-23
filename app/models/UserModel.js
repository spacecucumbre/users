const mongoose = require('mongoose');

const User = new mongoose.Schema({
  name: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String
  },
  website: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
}) 

module.exports = mongoose.model('User', User);
