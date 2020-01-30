const express = require('express');
const RestaurantReservation = require('../database/index.js');

const app = express();

app.get('/', (req, res) => res.status(200).send('ROOT'));

app.get('/api/reservations/:restaurantId/dateTime/:dateTime', (req, res) => {
  RestaurantReservation.getReservations();
  res.status(200).send('DATETIMES');
});
module.exports = app;
