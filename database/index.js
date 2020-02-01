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

const getReservations = async (restaurantId, dateTime) => {
  const minusHourFifteen = new Date(dateTime);
  minusHourFifteen.setHours(minusHourFifteen.getHours() - 1);
  minusHourFifteen.setMinutes(minusHourFifteen.getMinutes() - 15);

  const plusHourFifteen = new Date(dateTime);
  plusHourFifteen.setHours(plusHourFifteen.getHours() + 1);
  plusHourFifteen.setMinutes(plusHourFifteen.getMinutes() + 15);

  console.log(minusHourFifteen);
  console.log(plusHourFifteen);
  // RestaurantReservation.find({ restaurantId }, (err, docs) => console.log(docs));
};

module.exports.getReservations = getReservations;
