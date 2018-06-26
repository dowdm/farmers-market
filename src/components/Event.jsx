import React from 'react';
import PropTypes from 'prop-types';

function Event(props){
  return (
    <div>
      <h3>{props.day}</h3>
      <p><em>{props.location}</em></p>
      <p><em>{props.hours}</em></p>
      <p><em>{props.booth}</em></p>
      <hr/>
    </div>
  );
}
Event.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};


export default Event;
