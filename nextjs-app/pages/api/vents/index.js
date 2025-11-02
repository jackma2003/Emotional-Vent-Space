import dbConnect from '../../../lib/mongodb';
import Vent from '../../../models/Vent';
import { checkForHarmfulContent } from '../../../lib/moderation';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const vents = await Vent.find().sort({ createdAt: -1 }); // Newest first
      res.status(200).json(vents);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching vents', error: error.message });
    }
  } 
  
  else if (req.method === 'POST') {
    try {
      const { text } = req.body;

      // Validation
      if (!text || text.trim().length === 0) {
        return res.status(400).json({ message: 'Text is required' });
      }

      const trimmedText = text.trim();

      // Moderation check
      const moderationResult = checkForHarmfulContent(trimmedText);
      if (moderationResult.isBlocked) {
        return res.status(400).json({
          message: `Content blocked: ${moderationResult.reason}`,
          reason: moderationResult.reason,
          category: moderationResult.category,
          blocked: true
        });
      }

      // Create new vent
      const vent = await Vent.create({ text: trimmedText });
      res.status(201).json(vent);
    } catch (error) {
      res.status(500).json({ message: 'Error creating vent', error: error.message });
    }
  }
  
  else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

