import React from 'react';

const LocationSelector = () => (
  <div>
    <h2>Location</h2>
    <input type="text" placeholder="Enter an address..." />
    <input type="button" value="Search" />
    <p>OR</p>
    <select>
      <option>County name...</option>
    </select>
  </div>
);

export default LocationSelector;
