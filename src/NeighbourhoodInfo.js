import React from 'react';

const NeighbourhoodInfo = () => (
  <div>
    <h2>Neighbourhoods</h2>
    <ul>
      <li>Neighbourhood1: 100</li>
      <li>Neighbourhood2: 98</li>
      <li>Neighbourhood3: 90</li>
      <li>Neighbourhood4: 50</li>
      <li>Neighbourhood5: 49</li>
      <li>Neighbourhood6: 30</li>
      <li>Neighbourhood7: 10</li>
    </ul>
    <p>Compare scores:</p>
    <input
      type="radio"
      id="local"
      name="areaComparison"
      value="local"
      checked
    />
    <label for="local">Locally</label>
    <input type="radio" id="national" name="areaComparison" value="national" />
    <label for="national">Nationally</label>
  </div>
);

export default NeighbourhoodInfo;
