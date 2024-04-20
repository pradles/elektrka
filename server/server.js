const express = require('express');
const cors = require('cors');

const app = express();

// Allow all origins to access this server
app.use(cors());
app.use(express.json()); // Middleware to parse JSON request body

// Define a route
app.get('/', (req, res) => {
  res.send('Welcome to my Node.js server!');
});

// Define a route for testing
app.get('/test', (req, res) => {
  console.log('Working');
  res.send('Test route');
});

// Route to receive wattage data and log it to the console
app.post('/send-wattage', (req, res) => {
  try {
    const { user, room, wattage } = req.body;

    // Log received wattage data to the console
    console.log('Received wattage data:');
    console.log('User:', user);
    console.log('Room:', room);
    console.log('Wattage:', wattage);

    res.status(200).send('Wattage data received and logged');
  } catch (error) {
    console.error('Error receiving and logging wattage data:', error);
    res.status(500).send('Error receiving and logging wattage data');
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
