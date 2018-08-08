import React from 'react';
import PropTypes from 'prop-types';

const LocationSelector = ({ forceNames, setCurrentArea }) => (
  <div>
    <h2>Location</h2>
    <select
      defaultValue="default"
      onChange={event => setCurrentArea(event.target.value)}
    >
      <option disabled value="default">
        Select a region...
      </option>
      {forceNames.map(force => <option key={force}>{force}</option>)}
    </select>
  </div>
);

LocationSelector.propTypes = {
  forceNames: PropTypes.array.isRequired,
  setCurrentArea: PropTypes.func.isRequired
};

export default LocationSelector;
