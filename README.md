# Emotional Vent Space 🌙

A safe, anonymous digital space where people can freely express their thoughts and feelings without judgment.

## Tech Stack

**MERN Stack:**
- **M**ongoDB - Database for storing vent messages
- **E**xpress - Backend web framework
- **R**eact - Frontend UI library
- **N**ode.js - Backend runtime environment
- **Redux Toolkit** - State management

## Features

✅ **Anonymous Sharing** - No login required, completely anonymous  
✅ **Persistent Storage** - Messages saved in MongoDB database  
✅ **Real-time Feed** - See your message appear instantly in the community feed  
✅ **Calming Design** - Beautiful, soothing UI with gradient backgrounds  
✅ **Responsive** - Works perfectly on desktop, tablet, and mobile devices  
✅ **Redux State Management** - Efficient global state management  
✅ **RESTful API** - Clean API endpoints for all operations

## Prerequisites

Before you begin, ensure you have:
- Node.js (v14 or higher) installed
- MongoDB installed and running locally, OR
- MongoDB Atlas account for cloud database

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd Emotional-Vent-Space
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:

```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/emotional-vent-space
```

**For MongoDB Atlas (Cloud):**
```env
PORT=5001
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/emotional-vent-space
```

**Note:** Port 5001 is used instead of 5000 because macOS uses port 5000 for AirPlay Receiver by default.

### 3. Frontend Setup

```bash
cd client
npm install
```

### 4. Start the Application

**Terminal 1 - Start Backend:**
```bash
cd server
npm run dev
```

The backend server will run on `http://localhost:5001`

**Terminal 2 - Start Frontend:**
```bash
cd client
npm start
```

The React app will automatically open at `http://localhost:3000`

## Project Structure

```
Emotional-Vent-Space/
├── server/                  # Backend (Node.js/Express)
│   ├── models/
│   │   └── Vent.js         # MongoDB schema
│   ├── routes/
│   │   └── vents.js        # API routes
│   ├── server.js           # Express server setup
│   ├── package.json
│   └── .env                # Environment variables (create this)
│
├── client/                  # Frontend (React)
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Header.js
│   │   │   ├── VentForm.js
│   │   │   ├── VentFeed.js
│   │   │   ├── VentMessage.js
│   │   │   └── Footer.js
│   │   ├── store/          # Redux store
│   │   │   ├── store.js
│   │   │   └── slices/
│   │   │       └── ventsSlice.js
│   │   ├── hooks/
│   │   │   └── reduxHooks.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## API Endpoints

### GET /api/vents
Retrieve all vent messages (newest first)

**Response:**
```json
[
  {
    "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
    "text": "Today was a good day!",
    "createdAt": "2024-01-01T12:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  }
]
```

### POST /api/vents
Create a new vent message

**Request Body:**
```json
{
  "text": "Your message here"
}
```

**Response:**
```json
{
  "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
  "text": "Your message here",
  "createdAt": "2024-01-01T12:00:00.000Z",
  "updatedAt": "2024-01-01T12:00:00.000Z"
}
```

### DELETE /api/vents/:id
Delete a vent message by ID

**Response:**
```json
{
  "message": "Vent deleted successfully"
}
```

## Redux State Management

The app uses Redux Toolkit for state management:

- **Async Thunks**: Handle API calls (`fetchVents`, `createVent`, `deleteVent`)
- **Slices**: Manage vent state with loading and error handling
- **Selectors**: Access state with typed hooks

## Production Build

### Build Frontend
```bash
cd client
npm run build
```

This creates an optimized production build in `client/build/`

### Deploy

**Backend:**
- Deploy to Heroku, Railway, or DigitalOcean
- Set environment variables on your hosting platform

**Frontend:**
- Deploy to Vercel, Netlify, or Firebase Hosting
- Update API URL in `client/src/store/slices/ventsSlice.js`

## Future Enhancements

- User authentication and private vents
- Message reactions and responses
- Message categories/tags
- Text sentiment analysis
- Real-time updates with Socket.io
- Rate limiting and moderation tools
- Export/import functionality

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or need help, please open an issue on GitHub.

## Acknowledgments

Built with ❤️ using the MERN stack
