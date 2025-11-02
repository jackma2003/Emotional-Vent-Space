import mongoose from 'mongoose';

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

const Vent = mongoose.models.Vent || mongoose.model('Vent', ventSchema);

export default Vent;

