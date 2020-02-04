import Reservation from './Reservation.jsx';

const ReactDOM = require('react-dom');
const React = require('react');

console.log(window.location.pathname[1]);
ReactDOM.render(
  <Reservation restaurantId={window.location.pathname[1]} />,
  document.getElementById('app'),
);
