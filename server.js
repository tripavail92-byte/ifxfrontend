const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve static files from js directory
app.use('/js', express.static(path.join(__dirname, 'js')));

// Serve static files from stitch_ifx_manual_terminal directory
app.use('/stitch_ifx_manual_terminal', express.static(path.join(__dirname, 'stitch_ifx_manual_terminal')));

// Route for root - serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Catch all other routes and serve index.html (for client-side routing)
app.get('*', (req, res) => {
  // Try to serve the requested file, if not found, serve index.html
  const filePath = path.join(__dirname, req.path);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.sendFile(path.join(__dirname, 'index.html'));
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 IFX Trading Platform server running on port ${PORT}`);
  console.log(`📱 Open http://localhost:${PORT} to view the prototype`);
});
