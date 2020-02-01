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


const scheduleReservations = () => {
  const reservations = [];
  const dateTime = new Date();

  dateTime.setDate(dateTime.getDate() - 1);

  for (let i = 0; i < 60; i += 1) {
    dateTime.setDate(dateTime.getDate() + 1);
    dateTime.setHours(0, 0, 0, 0);
    for (let j = 0; j < 48; j += 1) {
      dateTime.setMinutes(dateTime.getMinutes() + 30);
      if (Math.random() < 0.5) {
        reservations.push(dateTime.toJSON());
      }
    }
  }

  return reservations;
};


const createRestaurants = () => {
  const restaurants = [];
  for (let i = 0; i < 100; i += 1) {
    restaurants.push({
      restaurantId: i,
      reservations: scheduleReservations(),
    });
  }
  return restaurants;
};


async function insertDummyRestaurants() {
  await RestaurantReservation.insertMany(createRestaurants());
}


insertDummyRestaurants()
  .then(() => {
    console.log('Database Seeded');
    process.exit();
  })
  .catch((error) => console.error(error));
