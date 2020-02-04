import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './Reservation.css';

// const React = require('react');

function Reservation({ restaurantId }) {
  const [id] = useState(restaurantId);
  return (
    <div className="reservation-main">
      {id}
    </div>
  );
}

Reservation.propTypes = {
  restaurantId: PropTypes.string.isRequired,
};

export default Reservation;
