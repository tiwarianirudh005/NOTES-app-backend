const express = require('express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  connectionString: '',
  ssl: { rejectUnauthorized: false }
});

app.get('/', (req, res) => {
  res.send('Hello, I built a server!');
});

app.get('/db-test', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.send(result.rows[0]);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
