const mongoose = require('mongoose');

const restaurantReservationSchema = new mongoose.Schema({
  restaurantId: {
    type: Number,
    unique: true,
  },
  reservations: [{ type: Date, unique: true }],
});


module.exports = restaurantReservationSchema;
