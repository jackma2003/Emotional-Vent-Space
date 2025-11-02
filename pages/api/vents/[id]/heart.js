import dbConnect from '../../../../lib/mongodb';
import Vent from '../../../../models/Vent';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === 'PATCH') {
    try {
      const vent = await Vent.findByIdAndUpdate(
        id,
        { $inc: { hearts: 1 } },
        { new: true }
      );
      
      if (!vent) {
        return res.status(404).json({ message: 'Vent not found' });
      }

      res.status(200).json(vent);
    } catch (error) {
      res.status(500).json({ message: 'Error adding heart', error: error.message });
    }
  }
  
  else {
    res.setHeader('Allow', ['PATCH']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

