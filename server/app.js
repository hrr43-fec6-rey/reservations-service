const express = require('express');

const app = express();

app.use(express.static('./client/dist'));

module.exports = app;
