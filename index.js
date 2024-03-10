const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to IntelliTune! Our AI-powered music composition assistant helps musicians and producers create harmonious melodies and chord progressions. Its intuitive interface suggests musical ideas and helps refine compositions in real-time.');
});

// Define route for the melody suggestion page
app.get('/melody-suggestion', (req, res) => {
  res.send('Our melody suggestion feature uses AI algorithms to suggest harmonious melodies based on your musical preferences, helping you to create unique and memorable compositions.');
});

// Define route for the chord progression page
app.get('/chord-progression', (req, res) => {
  res.send('Our chord progression feature helps you to create smooth and natural chord progressions that complement your melodies, providing a solid foundation for your compositions.');
});

// Define route for the real-time refinement page
app.get('/real-time-refinement', (req, res) => {
  res.send('Our real-time refinement feature allows you to refine your compositions in real-time, making it easy to experiment with different musical ideas and create the perfect sound for your project.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});