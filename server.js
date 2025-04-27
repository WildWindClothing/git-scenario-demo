require('dotenv').config();

const express = require('express');
const app = express();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

app.get('/', (req, res) => {
  res.send(`Database connected to: ${dbHost} with user: ${dbUser}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
