import React from 'react';
import PropTypes from 'prop-types';

const LocationSelector = ({ forceNames, setCurrentArea }) => (
  <div>
    <h2>Location</h2>
    <input type="text" placeholder="Enter an address..." />
    <input type="button" value="Search" />
    <p>OR</p>
    <select onChange={event => setCurrentArea(event.target.value)}>
      {forceNames.map(force => <option key={force}>{force}</option>)}
    </select>
  </div>
);

LocationSelector.propTypes = {
  forceNames: PropTypes.array.isRequired,
  setCurrentArea: PropTypes.func.isRequired
};

export default LocationSelector;
