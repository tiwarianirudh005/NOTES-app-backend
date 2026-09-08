const express = require('express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_gA8HYmJtpeN6@ep-sweet-glade-az76dyim-pooler.c-3.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
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