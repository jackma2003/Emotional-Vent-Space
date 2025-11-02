const mongoose = require('mongoose');

const ventSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
  hearts: {
    type: Number,
    default: 0,
    min: 0
  }
}, {
  timestamps: true // Automatically creates createdAt and updatedAt fields
});

module.exports = mongoose.model('Vent', ventSchema);

