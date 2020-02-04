const mysql = require('mysql');
const credentials = require('./credentials');

const connection = mysql.createConnection(credentials);
connection.connect();

const getReservations = async (restaurantId, dateTime, callback) => {
  const minusHourFifteen = new Date(dateTime);
  minusHourFifteen.setHours(minusHourFifteen.getHours() - 1);
  minusHourFifteen.setMinutes(minusHourFifteen.getMinutes() - 15);

  const plusHourFifteen = new Date(dateTime);
  plusHourFifteen.setHours(plusHourFifteen.getHours() + 1);
  plusHourFifteen.setMinutes(plusHourFifteen.getMinutes() + 15);

  const select = 'SELECT * FROM reservation WHERE restaurantId = ? AND dateTime BETWEEN ? and ?;';
  connection.query(
    select,
    [restaurantId, minusHourFifteen, plusHourFifteen],
    (error, results) => {
      if (error) {
        callback(error);
      } else {
        callback(null, results.map((record) => record.dateTime));
      }
    },
  );
};

module.exports.getReservations = getReservations;
module.exports.connection = connection;
