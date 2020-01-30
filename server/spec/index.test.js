const request = require('supertest');
const app = require('../app');

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
  test('It should call getRestaurantReservations', async () => {
    const response = await request(app).get('/api/reservations/mcdonalds/dateTime/now');
    expect(response.statusCode).toBe(200);
  });
});
