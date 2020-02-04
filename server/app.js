// const path = require('path');
const express = require('express');
const database = require('../database/index.js');

const app = express();
app.use(express.static('./client/dist'));


app.get('/:restaurantId', (req, res) => {
  res.redirect('/');
});

app.get('/api/reservations/:restaurantId/dateTime/:dateTime', (req, res) => {
  database.getReservations(
    req.params.restaurantId,
    req.params.dateTime,
    (err, result) => {
      res.json(result);
      res.status(200);
      res.send();
    },
  );
});
module.exports = app;
