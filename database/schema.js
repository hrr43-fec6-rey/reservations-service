const mongoose = require('mongoose');

const restaurantReservationSchema = new mongoose.Schema({
  restaurantId: {
    type: Number,
    unique: true,
  },
  reservations: [{ type: Date, unique: true }],
});

function getReservations() { console.log('GETING RESERVATIONS'); }
restaurantReservationSchema.statics.getReservations = getReservations;


module.exports = restaurantReservationSchema;
