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
    <p>Compare scores:</p>
    <input
      type="radio"
      id="local"
      name="areaComparison"
      value="local"
      defaultChecked
    />
    <label htmlFor="local">Locally</label>
    <input type="radio" id="national" name="areaComparison" value="national" />
    <label htmlFor="national">Nationally</label>
  </div>
);

NeighbourhoodInfo.protoTypes = {
  currentNeighbourhoods: PropTypes.array.isRequired,
  selectNeighbourhood: PropTypes.func.isRequired
};

export default NeighbourhoodInfo;
