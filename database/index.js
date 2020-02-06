const mysql = require('mysql');
const credentials = require('./credentials');

const connection = mysql.createConnection(credentials);
connection.connect();

const getReservations = async (restaurantId, dateTime, callback) => {
  // const minusHourFifteen = new Date(dateTime);
  // minusHourFifteen.setHours(minusHourFifteen.getHours() - 1);
  // minusHourFifteen.setMinutes(minusHourFifteen.getMinutes() - 15);

  // const plusHourFifteen = new Date(dateTime);
  // plusHourFifteen.setHours(plusHourFifteen.getHours() + 1);
  // plusHourFifteen.setMinutes(plusHourFifteen.getMinutes() + 15);
  const dayStart = new Date(dateTime);
  dayStart.setHours(0, 0, 0, 0);

  const dayEnd = new Date(dayStart);
  dayEnd.setHours(23, 45, 0, 0);

  const select = 'SELECT * FROM reservation WHERE restaurantId = ? AND dateTime BETWEEN ? and ?;';
  connection.query(
    select,
    [restaurantId, dayStart, dayEnd],
    (error, results) => {
      if (error) {
        console.error(error);
        console.log(restaurantId);
        callback(error);
      } else {
        callback(null, results.map((record) => record.dateTime));
      }
    },
  );
};

module.exports.getReservations = getReservations;
module.exports.connection = connection;
