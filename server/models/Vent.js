const mongoose = require('mongoose');

const ventSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true // Automatically creates createdAt and updatedAt fields
});

module.exports = mongoose.model('Vent', ventSchema);

