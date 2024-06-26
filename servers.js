const express = require('express');
const path = require('path');
const prerender = require('prerender-node');

const app = express();
// Use prerender.io for prerendering
app.use(prerender.set('prerenderToken', 'BCk4NCFmGN2ZVreWRHMT'));

// Serve the React app
app.use(express.static(path.join(__dirname, 'build')));

// Serve the React app for all routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;