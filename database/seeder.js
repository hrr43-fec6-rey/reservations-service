const faker = require('faker');
const Db = require('./db.js');

for (let i = 0; i < 100; i += 1) {
  Db.createReservation(
    faker.random.words(),
    faker.date.future(),
    faker.name.firstName(),
  );
}
