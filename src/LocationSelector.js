import React from 'react';
import PropTypes from 'prop-types';

const LocationSelector = ({ forceNames }) => (
  <div>
    <h2>Location</h2>
    <input type="text" placeholder="Enter an address..." />
    <input type="button" value="Search" />
    <p>OR</p>
    <select>
      {forceNames.map(force => <option key={force}>{force}</option>)}
    </select>
  </div>
);

LocationSelector.propTypes = {
  forceNames: PropTypes.array.isRequired
};

export default LocationSelector;
