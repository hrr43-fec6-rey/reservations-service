const mongoose = require('mongoose');
const restaurantReservationSchema = require('./schema.js');


mongoose.connect(
  'mongodb://localhost/restaurantReservation',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const RestaurantReservation = mongoose.model('Reservation', restaurantReservationSchema);

module.exports = RestaurantReservation;
