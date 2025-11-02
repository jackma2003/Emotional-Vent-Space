# Deployment Guide

## Deploy to Vercel (Recommended)

Your app is now fully configured for Vercel deployment!

### 1. Install Dependencies

```bash
cd nextjs-app
npm install
```

### 2. Create Environment File

```bash
# Copy the example file
cp .env.example .env.local
```

Edit `.env.local` and add your MongoDB connection string:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/emotional-vent-space?retryWrites=true&w=majority
```

### 3. Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 to test everything works.

### 4. Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI globally (one time)
npm install -g vercel

# Deploy
vercel
```

#### Option B: Using Vercel Dashboard

1. Go to https://vercel.com
2. Click "Import Project"
3. Select your GitHub repository
4. **Important:** Set the Root Directory to `nextjs-app`
5. Add environment variable:
   - Key: `MONGODB_URI`
   - Value: Your MongoDB connection string
6. Click "Deploy"

### 5. That's It! 🎉

Your app will be deployed at `https://your-project.vercel.app`

---

## Environment Variables in Vercel

After deploying, you can add/update environment variables:

1. Go to your project on Vercel dashboard
2. Settings → Environment Variables
3. Add or edit variables
4. Redeploy to apply changes

### Required Variables

- `MONGODB_URI` - Your MongoDB connection string

---

## Troubleshooting

### Build Errors

If you see build errors about missing dependencies:
```bash
cd nextjs-app
rm -rf node_modules package-lock.json
npm install
```

### MongoDB Connection Issues

- Check your connection string is correct
- Make sure you've whitelisted all IPs in MongoDB Atlas
- Verify the database name is correct

### API Routes Not Working

- Make sure your root directory is set to `nextjs-app` in Vercel
- Check Vercel build logs for errors
- Ensure MongoDB connection string is set

---

Need help? Check the main README.md or open an issue!

