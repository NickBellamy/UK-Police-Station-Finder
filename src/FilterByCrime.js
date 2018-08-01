import React from 'react';

const FilterByCrime = () => (
  <div>
    <h2>Filter by Crime</h2>
    <ul>
      <li>
        <input type="checkbox" id="crime1" />
        <label htmlFor="crime1">Crime 1</label>
      </li>
      <li>
        <input type="checkbox" id="crime2" />
        <label htmlFor="crime2">Crime 2</label>
      </li>
    </ul>
    <ul>
    <li>
        <input type="checkbox" id="2015" />
        <label htmlFor="2015">2015</label>
      </li>
      <li>
        <input type="checkbox" id="2016" />
        <label htmlFor="2016">2016</label>
      </li>
    </ul>
  </div>
);

export default FilterByCrime;
