const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.dbbase)
  .then(() => {
    console.log('DataBase Successfully Connected');
  })
  .catch((err) => {
    console.log('Unable to connect to database', err);
    process.exit();
  });

app.get('/', (req, res) => {
  res.send('bonjour');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

module.exports = app;
