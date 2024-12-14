// server/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for frontend-backend communication
app.use(express.json()); // Parse incoming JSON data

// Test route to verify the server is working
app.get('/api/test', (req, res) => {
  res.json({ message: "Server is working!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle root URL
app.get('/', (req, res) => {
    res.send("Welcome to the SentinelEye API");
  });
  