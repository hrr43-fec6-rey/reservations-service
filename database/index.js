const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/reservation',
  { userNewUrlParser: true },
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const reservationSchema = new mongoose.Schema({
  restaurant: String,
  dateTime: [Date],
  user: String,
});

const Reservation = mongoose.model('Reservation', reservationSchema);

// const createReservation = (restaurant, dateTime, user) => {
//  // db.once('open', () => {
//  const reservation = Reservation({
//    restaurant,
//    dateTime,
//    user,
//  });
//  reservation.save((err) => {
//    if (err) {
//      return console.error(err);
//    }
//    return console.log('Reservation Created!');
//  });
//  // });
//  // .then(() => {
//  //   console.log('Database seeded');
//  //   process.exit();
//  // });
// };

module.exports = Reservation;
