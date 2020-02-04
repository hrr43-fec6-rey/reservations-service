import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './Reservation.css';

// const React = require('react');

function Reservation({ restaurantId }) {
  const [id] = useState(restaurantId);
  return (
    <div className="reservation-main">
      <div className="reservation-title">Make a reservation</div>
      <select className="reservation-partysize">
        {// Make array of 1 - 20
          [...Array(21).keys()].slice(1).map((key) => (
            <option value={key}>
              {`For ${key}`}
            </option>
          ))
        }
      </select>
    </div>
  );
}

Reservation.propTypes = {
  restaurantId: PropTypes.string.isRequired,
};

export default Reservation;
