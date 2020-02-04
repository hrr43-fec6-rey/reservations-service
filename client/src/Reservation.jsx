import PropTypes from 'prop-types';
import React, { useState } from 'react';

// const React = require('react');

function Reservation({ restaurantId }) {
  const [id] = useState(restaurantId);
  return (
    <h1>
      {id}
    </h1>
  );
}

Reservation.propTypes = {
  restaurantId: PropTypes.string.isRequired,
};

export default Reservation;
