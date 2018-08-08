import React from 'react';
import PropTypes from 'prop-types';

const LocationSelector = ({ forceNames, setCurrentArea, currentArea }) => (
  <div>
    <h2>Location</h2>
    <select
      value={currentArea}
      onChange={event => setCurrentArea(event.target.value)}
    >
      <option disabled value="default">
        Select a region...
      </option>
      {forceNames.map(force => <option key={force} value={force}>{force}</option>)}
    </select>
  </div>
);

LocationSelector.propTypes = {
  currentArea: PropTypes.string.isRequired,
  forceNames: PropTypes.array.isRequired,
  setCurrentArea: PropTypes.func.isRequired
};

export default LocationSelector;
