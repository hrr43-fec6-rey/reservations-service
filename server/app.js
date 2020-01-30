const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).send('Ayy Lmao'));

app.get('/api/reservations/:restaurantId/dateTime/:dateTime', (req, res) => res.status(200).send('REEEEEE'));

module.exports = app;
