import dbConnect from '../../../lib/mongodb';
import Vent from '../../../models/Vent';
import { checkForHarmfulContent } from '../../../lib/moderation';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === 'PUT') {
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

      const vent = await Vent.findByIdAndUpdate(
        id,
        { text: trimmedText },
        { new: true, runValidators: true }
      );
      
      if (!vent) {
        return res.status(404).json({ message: 'Vent not found' });
      }

      res.status(200).json(vent);
    } catch (error) {
      res.status(500).json({ message: 'Error updating vent', error: error.message });
    }
  } 
  
  else if (req.method === 'DELETE') {
    try {
      const vent = await Vent.findByIdAndDelete(id);
      
      if (!vent) {
        return res.status(404).json({ message: 'Vent not found' });
      }

      res.status(200).json({ message: 'Vent deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting vent', error: error.message });
    }
  }
  
  else {
    res.setHeader('Allow', ['PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

