import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './Reservation.css';

// const React = require('react');

function Reservation({ restaurantId }) {
  const [id] = useState(restaurantId);
  console.log('do something with ', id);
  return (
    <div className="reservation-main">
      <div className="reservation-title">Make a reservation</div>
      <select className="reservation-partysize">
        {// Make array of 1 - 20 and map to options
          [...Array(21).keys()].slice(1).map((key) => (
            <option value={key}>
              {`For ${key}`}
            </option>
          ))
        }
      </select>
      <input className="datepicker" type="date" />
      <select className="timepicker">
        {// Create 48 30 minute time slots
          [...Array(25).keys()].slice(0, 24)
            .map((time) => time % 12)
            .map((time) => (time === 0 ? 12 : time))
            .map((time, index) => [
              <option value={[index < 13 ? index : index + 12, 0]}>
                {`${time}:00 ${index < 12 ? 'AM' : 'PM'}`}
              </option>,
              <option value={[index < 13 ? index : index + 12, 30]}>
                {`${time}:30 ${index < 12 ? 'AM' : 'PM'}`}
              </option>,
            ])
        }
      </select>
    </div>
  );
}

Reservation.propTypes = {
  restaurantId: PropTypes.string.isRequired,
};

export default Reservation;
