# IFX Trading Platform - Interactive Prototype

<div align="center">

![IFX Trading Platform](https://img.shields.io/badge/IFX-Trading%20Platform-008f77?style=for-the-badge&logo=terminal&logoColor=white)
![Status](https://img.shields.io/badge/Status-Prototype%20Ready-success?style=for-the-badge)
![Screens](https://img.shields.io/badge/Screens-7-blue?style=for-the-badge)

**Professional Trading Platform Prototype for Client Presentation**

[Features](#-features) • [Quick Start](#-quick-start) • [Screens](#-available-screens) • [Documentation](#-documentation)

</div>

---

## 🚀 Quick Start

### Option 1: Direct Browser Access
1. Open `index.html` in your web browser
2. Navigate through the interactive prototype
3. Click any screen card to explore that feature

### Option 2: Local Server (Recommended)
```bash
# Install dependencies
npm install

# Start the server
npm start

# Then open: http://localhost:3000
```

### Option 3: Deploy to Railway
The project is ready for Railway deployment. See [Deployment](#-deployment) section below.

## ✨ Features

- **🎨 Professional Design**: Modern dark UI with glass morphism effects
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🔄 Interactive Navigation**: Seamless flow between all screens
- **⚡ Smooth Animations**: Polished transitions and hover effects
- **🌙 Dark Mode**: Consistent dark theme throughout
- **📊 Real Data Visualization**: Charts, metrics, and analytics displays
- **🎯 Client-Ready**: Professional presentation quality

## 📱 Available Screens

### Core Trading Features

#### 1. **Manual Terminal** 
**Path:** `stitch_ifx_manual_terminal/ifx_manual_terminal/code.html`

The primary trading interface featuring:
- Real-time SMS (Supply & Demand) zone visualization
- IFX Coach safety checklist with 10 validation points
- Trade ticket with entry, stop loss, and take profit inputs
- Live execution controls with safety locks
- Chart integration with green/red zone indicators

**Key Features:**
- ✅ Execution locked until all safety checks pass
- ✅ Real-time price updates
- ✅ Risk management integration
- ✅ Strategy alignment verification

---

#### 2. **Copy Hub Leaderboard**
**Path:** `stitch_ifx_manual_terminal/ifx_copy_hub_leaderboard/code.html`

Social trading platform featuring:
- Master traders leaderboard with performance rankings
- Detailed trader profiles (ROI, win rate, max drawdown)
- Risk scoring system (1-5 scale)
- Copy trading setup interface
- Equity curve visualization
- Copy mode selection (Fixed Lot / Proportional)

**Key Features:**
- 📊 30-day ROI tracking
- 🎯 Risk assessment indicators
- 👥 Follower count display
- ⚙️ Customizable copy parameters

---

#### 3. **Performance Dashboard**
**Path:** `stitch_ifx_manual_terminal/ifx_performance_dashboard/code.html`

Comprehensive analytics dashboard with:
- Net PnL tracking with trend indicators
- Win rate percentage and improvements
- Average Risk:Reward ratio analysis
- Equity curve visualization (7D, 30D, 90D, ALL)
- Recent trades breakdown
- Filter by Manual/Copy/Combined trades

**Key Features:**
- 📈 Interactive equity curve
- 📊 Trade-by-trade analysis
- 🔍 Advanced filtering options
- 📉 Performance metrics tracking

---

### Management & Settings

#### 4. **Custodial Wallet**
**Path:** `stitch_ifx_manual_terminal/ifx_custodial_wallet/code.html`

Complete wallet management system:
- Total balance with BTC equivalent
- Available funds and margin reserved
- Floating PnL tracking
- Equity calculations
- Crypto deposit (USDT TRC20/ERC20)
- Fiat proof of payment upload
- Withdrawal requests with free margin checks
- Transaction history ledger

**Key Features:**
- 💰 Multi-currency support
- 📤 QR code deposit addresses
- 📋 Complete transaction history
- ⚠️ Margin protection warnings

---

#### 5. **Account Settings**
**Path:** `stitch_ifx_manual_terminal/ifx_account_settings/code.html`

User configuration center:
- Profile management with verified badges
- Emergency stop toggle (pause all positions)
- Broker connection status (MetaTrader 5)
- Manual trading preferences (default risk, SL/TP mode)
- Copy trading settings (max drawdown, trades per day)
- Alerts & webhooks (Email, Discord)

**Key Features:**
- 🛡️ Emergency controls
- 🔌 Broker integration status
- ⚙️ Trading preference management
- 🔔 Notification configuration

---

#### 6. **Admin Backoffice**
**Path:** `stitch_ifx_manual_terminal/ifx_admin_backoffice/code.html`

Administrative control panel:
- Exposure monitoring dashboard
- Total liabilities tracking
- Symbol-specific exposure (BTC/USD, ETH/USD)
- Deposit approvals queue with image previews
- System controls (News blackout, Min R:R)
- Global emergency kill switch

**Key Features:**
- 📊 Real-time exposure metrics
- ⚠️ Risk alerts and warnings
- ✅ Approval workflow management
- 🚨 Emergency system controls

---

### Education & Training

#### 7. **System Training**
**Path:** `stitch_ifx_manual_terminal/ifx_system_training_onboarding/code.html`

Interactive onboarding system:
- Progressive lesson structure (1 of 4)
- Visual guides for SMS zones
- Interactive diagrams
- Quiz components with multiple choice
- Progress tracking (25% complete indicator)
- Step-by-step navigation

**Key Features:**
- 📚 Structured learning path
- 🎨 Visual diagram explanations
- ✅ Knowledge checks
- 📈 Progress tracking

---

## 📂 Project Structure

```
stitch_ifx_manual_terminal/
├── index.html                          # Main navigation hub
├── README.md                           # This documentation
├── js/
│   └── navigation.js                   # Shared navigation system
└── stitch_ifx_manual_terminal/
    ├── ifx_manual_terminal/
    │   ├── code.html                   # Manual Terminal screen
    │   └── screen.png                  # Screenshot reference
    ├── ifx_account_settings/
    │   ├── code.html                   # Account Settings screen
    │   └── screen.png
    ├── ifx_admin_backoffice/
    │   ├── code.html                   # Admin Backoffice screen
    │   └── screen.png
    ├── ifx_copy_hub_leaderboard/
    │   ├── code.html                   # Copy Hub screen
    │   └── screen.png
    ├── ifx_custodial_wallet/
    │   ├── code.html                   # Wallet screen
    │   └── screen.png
    ├── ifx_performance_dashboard/
    │   ├── code.html                   # Performance Dashboard screen
    │   └── screen.png
    └── ifx_system_training_onboarding/
        ├── code.html                   # Training screen
        └── screen.png
```

## 🎨 Design System

### Color Palette
- **Primary**: `#008f77` (Teal)
- **Background Dark**: `#1a1a1a`
- **Background Light**: `#f7f7f7`
- **Card Dark**: `#252525`
- **Success**: `#34d399` (Green)
- **Danger**: `#ef4444` (Red)

### Typography
- **Font Family**: Manrope (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800

### Components
- **Glass Cards**: Frosted glass effect with backdrop blur
- **Material Icons**: Google Material Symbols
- **Responsive Grid**: Tailwind CSS grid system

## 🚂 Deployment

### Railway Deployment

This project is configured for easy deployment on Railway.

#### Prerequisites
- Railway account (sign up at [railway.app](https://railway.app))
- GitHub repository connected

#### Deployment Steps

1. **Connect Repository to Railway**
   - Go to [Railway Dashboard](https://railway.app/dashboard)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository: `tripavail92-byte/ifxfrontend`

2. **Configure Project**
   - Project Name: `ifxtrading` (or your preferred name)
   - Railway will automatically detect the Node.js setup

3. **Deploy**
   - Railway will automatically:
     - Install dependencies (`npm install`)
     - Build the project
     - Start the server (`npm start`)
   - Your app will be live at: `https://your-app-name.railway.app`

4. **Environment Variables** (Optional)
   - No environment variables required for basic deployment
   - PORT is automatically set by Railway

#### Railway Configuration Files
- `package.json` - Node.js dependencies and scripts
- `server.js` - Express server for serving static files
- `railway.json` - Railway deployment configuration
- `railway.toml` - Alternative Railway configuration
- `Procfile` - Process file for Railway

#### Custom Domain (Optional)
1. Go to your Railway project settings
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Railway will provide DNS configuration

#### Monitoring
- Check deployment logs in Railway dashboard
- Monitor uptime and performance
- View real-time logs: `railway logs`

### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm start

# Server runs on http://localhost:3000
```

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript**: Vanilla JS for navigation
- **Chart.js**: Interactive charting library
- **Express.js**: Node.js web server for deployment
- **Material Icons**: Icon library
- **Google Fonts**: Manrope font family

### Browser Compatibility
- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

### Performance
- All resources loaded via CDN
- No build process required
- Optimized for fast loading
- Smooth 60fps animations

## 📋 Navigation Flow

```
Index (Home)
    │
    ├──→ Manual Terminal
    │       └──→ (Bottom Nav) → Copy Hub, Wallet, Stats, Settings
    │
    ├──→ Copy Hub Leaderboard
    │       └──→ (Bottom Nav) → Markets, Copy Hub, Trade, Profile
    │
    ├──→ Performance Dashboard
    │       └──→ (Bottom Nav) → Terminal, Hub, Analysis, Wallet, More
    │
    ├──→ Custodial Wallet
    │       └──→ (Bottom Nav) → Home, Wallet, Trades, Settings
    │
    ├──→ Account Settings
    │       └──→ (Bottom Nav) → Terminal, Copy, Wallet, Data, Settings
    │
    ├──→ Admin Backoffice
    │       └──→ (Bottom Nav) → Terminal, Users, Ledger, Configs
    │
    └──→ System Training
            └──→ (Footer Nav) → Skip, Next Lesson
```

## 🎯 Presentation Tips

### For Client Demos:
1. **Start with Index**: Show the overview of all features
2. **Highlight Core Features**: Manual Terminal → Copy Hub → Performance
3. **Show Management Tools**: Wallet → Settings → Admin (if applicable)
4. **End with Training**: Demonstrate the onboarding experience

### Key Points to Emphasize:
- ✅ Professional, modern UI design
- ✅ Comprehensive feature set
- ✅ Safety and risk management focus
- ✅ User-friendly navigation
- ✅ Mobile-responsive design

## 📝 Notes

- All screens are **standalone HTML files** - no backend required
- Images and external resources load from CDN or provided URLs
- Navigation is enhanced with JavaScript for smooth transitions
- The prototype is **presentation-ready** and fully interactive
- Some interactive features are visual demonstrations (no actual backend integration)

## 🔗 Quick Links

- **Home**: `index.html`
- **Manual Terminal**: `stitch_ifx_manual_terminal/ifx_manual_terminal/code.html`
- **Copy Hub**: `stitch_ifx_manual_terminal/ifx_copy_hub_leaderboard/code.html`
- **Performance**: `stitch_ifx_manual_terminal/ifx_performance_dashboard/code.html`
- **Wallet**: `stitch_ifx_manual_terminal/ifx_custodial_wallet/code.html`
- **Settings**: `stitch_ifx_manual_terminal/ifx_account_settings/code.html`
- **Admin**: `stitch_ifx_manual_terminal/ifx_admin_backoffice/code.html`
- **Training**: `stitch_ifx_manual_terminal/ifx_system_training_onboarding/code.html`

## 📄 License

This is a prototype/demo project for client presentation purposes.

---

<div align="center">

**Built with ❤️ for IFX Trading Platform**

*Professional • Interactive • Client-Ready*

</div>
