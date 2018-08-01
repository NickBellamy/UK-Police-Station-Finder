import React from 'react';

const FilterByCrime = () => (
  <div>
    <h2>Filter by Crime</h2>
    <ul>
      <li>
        <input type="checkbox" id="crime1" />
        <label for="crime1">Crime 1</label>
      </li>
      <li>
        <input type="checkbox" id="crime2" />
        <label for="crime2">Crime 2</label>
      </li>
    </ul>
    <ul>
    <li>
        <input type="checkbox" id="2015" />
        <label for="2015">2015</label>
      </li>
      <li>
        <input type="checkbox" id="2016" />
        <label for="2016">2016</label>
      </li>
    </ul>
  </div>
);

export default FilterByCrime;
