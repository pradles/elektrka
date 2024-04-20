const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();

// Allow all origins to access this server
app.use(cors());
app.use(express.json()); // Middleware to parse JSON request body

// Connect to SQLite database
const db = new sqlite3.Database('wattage.db');

// Create table if not exists
db.run(`CREATE TABLE IF NOT EXISTS wattage_data (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  device_name TEXT,
  user TEXT,
  room TEXT,
  wattage REAL,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

// Define a route
app.get('/', (req, res) => {
  res.send('Welcome to my Node.js server!');
});

// Define a route for testing
app.get('/test', (req, res) => {
  console.log('Working');
  res.send('Test route');
});

// Route to receive wattage data and store it in SQLite database
app.post('/send-wattage', (req, res) => {
  try {
    const { device_name, user, room, wattage } = req.body;

    // Insert data into SQLite database
    db.run(`INSERT INTO wattage_data (device_name, user, room, wattage) VALUES (?, ?, ?, ?)`, [device_name, user, room, wattage], function(err) {
      if (err) {
        console.error('Error inserting data into database:', err.message);
        res.status(500).send('Error inserting data into database');
      } else {
        console.log(`Row inserted with rowid ${this.lastID}`);
        res.status(200).send('Wattage data received and stored in database');
      }
    });
  } catch (error) {
    console.error('Error receiving and storing wattage data:', error);
    res.status(500).send('Error receiving and storing wattage data');
  }
});

// Define a route to get unique rooms and their associated unique device names count
app.get('/get-rooms', (req, res) => {
  try {
    // Query to get unique rooms and their associated unique device names count
    const query = `
      SELECT room, COUNT(DISTINCT device_name) AS unique_device_count
      FROM wattage_data
      GROUP BY room
    `;

    // Execute the query
    db.all(query, (err, rows) => {
      if (err) {
        console.error('Error querying database:', err.message);
        res.status(500).send('Error querying database');
      } else {
        // Send the result as JSON response
        res.status(200).json(rows);
      }
    });
  } catch (error) {
    console.error('Error fetching room data:', error);
    res.status(500).send('Error fetching room data');
  }
});

// Define a route to get unique users
app.get('/get-users', (req, res) => {
  try {
    // Query to get unique users
    const query = `
      SELECT DISTINCT user
      FROM wattage_data
    `;

    // Execute the query
    db.all(query, (err, rows) => {
      if (err) {
        console.error('Error querying database:', err.message);
        res.status(500).send('Error querying database');
      } else {
        // Extract unique users from the result
        const uniqueUsers = rows.map(row => row.user);
        // Send the unique users as JSON response
        res.status(200).json(uniqueUsers);
      }
    });
  } catch (error) {
    console.error('Error fetching unique users:', error);
    res.status(500).send('Error fetching unique users');
  }
});

// Define a route to get room info
app.get('/get-room-info/:roomName', (req, res) => {
  try {
    const roomName = req.params.roomName;

    // Query to get unique device names in the room and sum of wattage
    const query = `
      SELECT device_name, SUM(wattage)/COUNT(device_name) AS average_wattage
      FROM wattage_data
      WHERE room = ?
      GROUP BY device_name
    `;

    // Execute the query
    db.all(query, [roomName], (err, rows) => {
      if (err) {
        console.error('Error querying database:', err.message);
        res.status(500).send('Error querying database');
      } else {
        // Extract unique device names and total wattage from the result
        const roomInfo = {
          room: roomName,
          devices: rows,
        };

        // Query to get wattage with timestamps
        const wattageQuery = `
          SELECT wattage, timestamp
          FROM wattage_data
          WHERE room = ?
          ORDER BY timestamp DESC
        `;

        // Execute the wattage query
        db.all(wattageQuery, [roomName], (wattageErr, wattageRows) => {
          if (wattageErr) {
            console.error('Error querying database:', wattageErr.message);
            res.status(500).send('Error querying database');
          } else {
            // Add wattage with timestamps to roomInfo
            roomInfo.wattageWithTimestamp = wattageRows;

            // Send room info as JSON response
            res.status(200).json(roomInfo);
          }
        });
      }
    });
  } catch (error) {
    console.error('Error fetching room info:', error);
    res.status(500).send('Error fetching room info');
  }
});

// Define a route to get user info
app.get('/get-user-info/:userName', (req, res) => {
  try {
    const userName = req.params.userName;

    // Query to get unique device names for the user and average wattage per device
    const query = `
      SELECT device_name, SUM(wattage)/COUNT(device_name) AS average_wattage
      FROM wattage_data
      WHERE user = ?
      GROUP BY device_name
    `;

    // Execute the query
    db.all(query, [userName], (err, rows) => {
      if (err) {
        console.error('Error querying database:', err.message);
        res.status(500).send('Error querying database');
      } else {
        // Construct user info object
        const userInfo = {
          user: userName,
          devices: rows
        };

        // Query to get wattage with timestamps
        const wattageQuery = `
          SELECT wattage, timestamp
          FROM wattage_data
          WHERE user = ?
          ORDER BY timestamp DESC
        `;

        // Execute the wattage query
        db.all(wattageQuery, [userName], (wattageErr, wattageRows) => {
          if (wattageErr) {
            console.error('Error querying database:', wattageErr.message);
            res.status(500).send('Error querying database');
          } else {
            // Add wattage with timestamps to userInfo
            userInfo.wattageWithTimestamp = wattageRows;

            // Send user info as JSON response
            res.status(200).json(userInfo);
          }
        });
      }
    });
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).send('Error fetching user info');
  }
});

// Define a route to get device info
app.get('/get-device-info/:deviceName', (req, res) => {
  try {
    const deviceName = req.params.deviceName;

    // Query to get user, room, average wattage, and wattage with timestamps for the device
    const query = `
      SELECT user, room, SUM(wattage)/COUNT(room) AS average_wattage
      FROM wattage_data
      WHERE device_name = ?
      GROUP BY user, room
    `;

    // Execute the query
    db.all(query, [deviceName], (err, rows) => {
      if (err) {
        console.error('Error querying database:', err.message);
        res.status(500).send('Error querying database');
      } else {
        // Construct device info object
        const deviceInfo = {
          device_name: deviceName,
          data: rows.map(row => ({
            user: row.user,
            room: row.room,
            average_wattage: row.average_wattage
          }))
        };

        // Query to get wattage with timestamps for the device
        const wattageQuery = `
          SELECT wattage, timestamp
          FROM wattage_data
          WHERE device_name = ?
          ORDER BY timestamp DESC
        `;

        // Execute the wattage query
        db.all(wattageQuery, [deviceName], (wattageErr, wattageRows) => {
          if (wattageErr) {
            console.error('Error querying database:', wattageErr.message);
            res.status(500).send('Error querying database');
          } else {
            // Add wattage with timestamps to deviceInfo
            deviceInfo.wattageWithTimestamp = wattageRows;

            // Send device info as JSON response
            res.status(200).json(deviceInfo);
          }
        });
      }
    });
  } catch (error) {
    console.error('Error fetching device info:', error);
    res.status(500).send('Error fetching device info');
  }
});



// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
