# Railway CLI Setup & Connection Guide

## Step 1: Install Railway CLI

### Windows (PowerShell)
```powershell
# Using npm (if you have Node.js)
npm install -g @railway/cli

# Or using Scoop
scoop bucket add railway https://github.com/railwayapp/homebrew-tap
scoop install railway

# Or using Chocolatey
choco install railway
```

### Alternative: Download Binary
Visit: https://github.com/railwayapp/cli/releases

## Step 2: Login to Railway

```bash
railway login
```

This will:
- Open your browser
- Ask you to authorize Railway CLI
- Complete authentication

## Step 3: Link Your Project

```bash
# Navigate to your project directory
cd C:\Users\hp\Downloads\stitch_ifx_manual_terminal

# Link to existing Railway project
railway link

# Or create new project
railway init
```

## Step 4: Deploy

```bash
# Deploy to Railway
railway up

# Or deploy specific service
railway up --service ifxtrading
```

## Step 5: View Logs

```bash
railway logs
```

## Step 6: Open in Browser

```bash
railway open
```

---

## Alternative: Manual Connection via Web

If CLI doesn't work, use the web interface:

1. Go to https://railway.app/dashboard
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Authorize GitHub access
5. Select: `tripavail92-byte/ifxfrontend`
6. Railway will auto-deploy

---

## Troubleshooting

### Authentication Issues
- Make sure you're logged into Railway web dashboard first
- Try `railway logout` then `railway login` again

### Project Not Found
- Verify project name: `ifxtrading`
- Check Project ID: `2a203558-9143-4cc1-8be4-917d3adcb7ab`
- Ensure you have access to the project

### Deployment Fails
- Check `package.json` is correct
- Verify `server.js` exists
- Review logs: `railway logs`
