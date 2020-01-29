const faker = require('faker');
const Reservation = require('./');

const createDummyData = () => {
  const dummyData = [];
  for (let i = 0; i < 100; i += 1) {
    dummyData.push({
      restaurant: faker.random.words(),
      dateTime: faker.date.future(),
      user: faker.name.firstName(),
    });
  }
  return dummyData;
};

async function insertDummyData() {
  await Reservation.insertMany(createDummyData());
}

insertDummyData()
  .then(() => {
    console.log('Database Seeded');
    process.exit();
  });
