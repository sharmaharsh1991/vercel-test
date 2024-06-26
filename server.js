
const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Use prerender.io for prerendering
app.use(prerender.set('prerenderToken', 'BCk4NCFmGN2ZVreWRHMT'));

// Serve your API routes here (if any)
app.get('/api/endpoint', (req, res) => {
  // Your API logic goes here
});

// Serve index.html for any other unrecognized routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})