import React from 'react';
import PropTypes from 'prop-types';

const NeighbourhoodInfo = ({ currentNeighbourhoods, selectNeighbourhood }) => (
  <div>
    <h2>Neighbourhoods</h2>
    <ul>
      {currentNeighbourhoods.map(neighbourhood => (
        <li key={neighbourhood.id}>
          <a href="#" onClick={() => selectNeighbourhood(neighbourhood.id)}>
            {neighbourhood.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

NeighbourhoodInfo.protoTypes = {
  currentNeighbourhoods: PropTypes.array.isRequired,
  selectNeighbourhood: PropTypes.func.isRequired
};

export default NeighbourhoodInfo;
