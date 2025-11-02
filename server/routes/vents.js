const express = require('express');
const router = express.Router();
const Vent = require('../models/Vent');

// GET /api/vents - Get all vents
router.get('/', async (req, res) => {
  try {
    const vents = await Vent.find().sort({ createdAt: -1 }); // Newest first
    res.json(vents);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching vents', error: error.message });
  }
});

// POST /api/vents - Create a new vent
router.post('/', async (req, res) => {
  try {
    const { text } = req.body;

    // Validation
    if (!text || text.trim().length === 0) {
      return res.status(400).json({ message: 'Text is required' });
    }

    // Create new vent
    const vent = new Vent({ text: text.trim() });
    const savedVent = await vent.save();

    res.status(201).json(savedVent);
  } catch (error) {
    res.status(500).json({ message: 'Error creating vent', error: error.message });
  }
});

// DELETE /api/vents/:id - Delete a vent (optional feature)
router.delete('/:id', async (req, res) => {
  try {
    const vent = await Vent.findByIdAndDelete(req.params.id);
    
    if (!vent) {
      return res.status(404).json({ message: 'Vent not found' });
    }

    res.json({ message: 'Vent deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting vent', error: error.message });
  }
});

module.exports = router;

