const request = require('supertest');
const app = require('../app');
const RestaurantReservation = require('../../database/index.js');


afterAll(async () => {
  await RestaurantReservation.connection.close();
});
describe('test /', () => {
  test('It should respond to GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

describe('test GET /api/reservations', () => {
  test('It should respond to GET method', async () => {
    const response = await request(app).get('/api/reservations/mcdonalds/dateTime/now');
    expect(response.statusCode).toBe(200);
  });
  test('It should call getReservations', async () => {
    const spy = jest.spyOn(RestaurantReservation, 'getReservations');
    await request(app).get('/api/reservations/mcdonalds/dateTime/now');
    expect(spy).toHaveBeenCalled();
  });
});
