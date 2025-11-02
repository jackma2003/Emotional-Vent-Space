# Emotional Vent Space - Next.js Version

A safe, anonymous digital space for emotional wellness. Now fully deployable on Vercel!

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your MongoDB connection string
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Deploy to Vercel**
   ```bash
   vercel
   ```

## What's Different from MERN Version?

- ✅ **All-in-one deployment** - Frontend and backend on Vercel
- ✅ **Next.js API Routes** - No separate Express server needed
- ✅ **Same features** - Hearts, moderation, emoji picker, etc.
- ✅ **Better performance** - Server-side rendering ready

## Environment Variables

Set these in Vercel dashboard:

- `MONGODB_URI` - Your MongoDB connection string

That's it! No need for separate backend URLs.

## Project Structure

```
nextjs-app/
├── pages/
│   ├── api/              # Backend API routes
│   ├── index.js          # Main page
│   └── _app.js           # App wrapper
├── components/           # React components
├── store/                # Redux store
├── lib/                  # Utilities (MongoDB, moderation)
├── models/               # Mongoose models
└── styles/               # Global styles
```

## Features

- Anonymous sharing
- Heart reactions
- Content moderation
- Emoji support
- Edit/Delete vents
- Peaceful UI design
- Fully responsive

---

Built with Next.js, MongoDB, and Redux Toolkit.

