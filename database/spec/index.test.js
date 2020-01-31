const mongoose = require('mongoose');
const restaurantReservationSchema = require('../schema.js');

beforeAll(async () => {
  await mongoose.connect(
    'mongodb://localhost/testRestaurantReservation',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('reservation', () => {
  it('should return "GETING RESERVATIONS"', async () => {
    const RestaurantReservation = mongoose.model('Reservation', restaurantReservationSchema);
    expect(RestaurantReservation.getReservations()).toEqual('GETING RESERVATIONS');
  });
});

//  });
//
//  xit('should insert  a doc into collection', async () => {
//    const users = db.collection('users');
//
//    const mockUser = { _id: 'some-user-id', name: 'John' };
//    await users.insertOne(mockUser);
//
//    const insertedUser = await users.findOne({ _id: 'some-user-id' });
//    expect(insertedUser).toEqual(mockUser);
//  });
