const express = require('express');
const cors = require('cors');

const app = express();

// Allow all origins to access this server
app.use(cors());

// Define a route
app.get('/', (req, res) => {
    res.send('Welcome to my Node.js server!');
});
  
// Define a route for testing
app.get('/test', (req, res) => {
    console.log('Working');
    res.send('Test route');
});
  

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
