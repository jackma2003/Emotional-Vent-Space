# Emotional Vent Space 🌙

A safe, anonymous digital space where people can freely express their thoughts and feelings without judgment.

## Tech Stack

**Frontend:**
- Next.js 14 - React framework with SSR
- React 18 - UI library
- Redux Toolkit - State management
- CSS3 - Styled with peaceful gradients and animations

**Backend:**
- Next.js API Routes - Serverless backend
- MongoDB - NoSQL database
- Mongoose - ODM for MongoDB

**Deployment:**
- Vercel - All-in-one hosting platform

## Features

✅ **Share Anonymously** - Express yourself freely without revealing your identity  
✅ **Heart Reactions** - Show support and empathy to others in the community  
✅ **Edit & Delete** - Modify or remove your vents anytime  
✅ **Emoji Support** - Add feeling with emoji picker  
✅ **Safe Space** - Automatic content moderation to keep the community safe  
✅ **Peaceful Design** - Calming, soothing interface for emotional wellness  
✅ **Works Everywhere** - Beautiful experience on phone, tablet, or computer  

## How It Works

1. Type your thoughts and click "Release"
2. See your message appear in the community feed instantly
3. Support others by hearting their messages
4. Edit or delete your vents whenever you want

## Safety & Privacy

- **Automatic moderation** protects against harmful content
- **No personal information** collected
- **Completely anonymous** - no login required
- **Judgment-free environment** for everyone

## Getting Started

### Quick Setup

```bash
# Install dependencies
cd nextjs-app
npm install

# Create environment file
cp .env.example .env.local
# Add your MongoDB connection string to .env.local

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see your app running!

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from nextjs-app directory
cd nextjs-app
vercel
```

**Or** use the Vercel dashboard:
1. Go to vercel.com
2. Import your GitHub repository
3. Set root directory to `nextjs-app`
4. Add `MONGODB_URI` environment variable
5. Deploy!

## Project Structure

```
emotional-vent-space/
├── nextjs-app/           # Main Next.js application
│   ├── pages/            # Pages and API routes
│   ├── components/       # React components
│   ├── store/            # Redux store and slices
│   ├── lib/              # Utilities (MongoDB, moderation)
│   ├── models/           # Mongoose models
│   └── styles/           # Global CSS
├── README.md             # This file
└── package.json          # Root package.json
```

## Environment Variables

Required in `.env.local`:

```
MONGODB_URI=your_mongodb_connection_string_here
```

## License

MIT License - Free to use and modify

---

Built with ❤️ and empathy for mental wellness
