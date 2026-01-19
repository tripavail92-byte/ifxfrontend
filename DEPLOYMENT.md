# Railway Deployment Guide

## 🚂 Deploying IFX Trading Platform to Railway

This guide will walk you through deploying the IFX Trading Platform prototype to Railway.

## Prerequisites

- ✅ Railway account ([Sign up here](https://railway.app))
- ✅ GitHub repository: `tripavail92-byte/ifxfrontend`
- ✅ Project configured with Railway

## Step-by-Step Deployment

### Step 1: Connect Repository

1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Authorize Railway to access your GitHub if needed
5. Select repository: `tripavail92-byte/ifxfrontend`

### Step 2: Configure Project

**Project Information:**
- **Name**: `ifxtrading`
- **Description**: IFX Trading Platform - Interactive Prototype
- **Project ID**: `2a203558-9143-4cc1-8be4-917d3adcb7ab`

Railway will automatically:
- Detect Node.js project from `package.json`
- Install dependencies
- Build and deploy

### Step 3: Verify Configuration

Railway should automatically detect:
- ✅ Build Command: `npm install` (automatic)
- ✅ Start Command: `npm start`
- ✅ Port: Automatically assigned (PORT environment variable)

### Step 4: Deploy

1. Railway will start the deployment automatically
2. Watch the build logs in the Railway dashboard
3. Wait for deployment to complete (usually 1-2 minutes)

### Step 5: Access Your App

Once deployed, Railway will provide:
- **Live URL**: `https://ifxtrading-production.up.railway.app` (or similar)
- You can customize the domain in project settings

## Configuration Files

### package.json
```json
{
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

### server.js
- Express server serving static files
- Handles all routes
- Uses PORT from environment (Railway sets this automatically)

### railway.json / railway.toml
- Railway-specific configuration
- Build and deploy settings
- Health check configuration

## Environment Variables

No environment variables required for basic deployment. Railway automatically sets:
- `PORT` - Server port (Railway assigns this)

## Custom Domain Setup

1. Go to Railway project → **Settings** → **Domains**
2. Click **"Generate Domain"** or **"Custom Domain"**
3. For custom domain:
   - Add your domain name
   - Railway will provide DNS records
   - Update your DNS provider with Railway's records

## Monitoring & Logs

### View Logs
```bash
# Using Railway CLI
railway logs

# Or view in Railway dashboard
# Project → Deployments → View Logs
```

### Health Checks
- Health check endpoint: `/` (root)
- Railway automatically monitors the app
- Restarts on failure (configured in railway.json)

## Troubleshooting

### Build Fails
- Check Node.js version (requires >= 18.0.0)
- Verify `package.json` is correct
- Check build logs in Railway dashboard

### App Not Loading
- Verify server.js is running
- Check PORT environment variable
- Review application logs

### Static Files Not Loading
- Verify file paths in server.js
- Check that all files are committed to Git
- Ensure proper static file serving configuration

## Updating Deployment

### Automatic Updates
Railway automatically redeploys when you push to the connected branch (usually `main`).

### Manual Redeploy
1. Go to Railway dashboard
2. Select your project
3. Click **"Redeploy"** button

## Project Structure for Railway

```
ifxfrontend/
├── package.json          # Node.js dependencies
├── server.js            # Express server
├── railway.json         # Railway config
├── railway.toml        # Alternative config
├── Procfile            # Process file
├── index.html          # Main page
├── js/                 # JavaScript files
└── stitch_ifx_manual_terminal/  # Screen files
```

## Cost

Railway offers:
- **Free tier**: $5 credit/month
- **Hobby plan**: $5/month (if needed)
- This static site should run on free tier

## Support

- Railway Documentation: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- Project Issues: GitHub Issues

---

**Your app will be live at:** `https://ifxtrading-production.up.railway.app`

*Note: The exact URL will be shown in your Railway dashboard after deployment.*
