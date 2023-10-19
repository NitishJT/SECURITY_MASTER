const mysql = require('mysql');
const express = require('express');
const cors=require('cors');
const app = express();
app.use(cors());
// Create a connection pool
const pool = mysql.createPool({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12651229',
  password: 'dA9kgKxnk9',
  database: 'sql12651229',
});

// Define a route to handle GET requests
app.get('/data', (req, res) => {
  // Use the connection pool to get a connection
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a database connection:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Perform a SQL query to retrieve data
    connection.query('SELECT * FROM dummydata', (queryErr, results) => {
      // Release the connection back to the pool
      connection.release();

      if (queryErr) {
        console.error('Error executing the query:', queryErr);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      // Respond with the retrieved data as JSON
      res.json(results);
    });
  });
});

// Start the Express server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
