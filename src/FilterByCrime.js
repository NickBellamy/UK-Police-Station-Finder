import React from 'react';
import PropTypes from 'prop-types';

const FilterByCrime = ({ crimeCategories, setCurrentCrime }) => (
  <div>
    <h2>Filter by Crime</h2>
    <select onChange={event => setCurrentCrime(event.target.value)}>
      {crimeCategories.map(crime => (
        <option key={crime.url}>{crime.name}</option>
      ))}
    </select>
    {/* Specific date filtering doesn't seem possible with the
        API at this point.  Will revisit at a later date
    <ul>
      <li>
        <input type="checkbox" id="2015" />
        <label htmlFor="2015">2015</label>
      </li>
      <li>
        <input type="checkbox" id="2016" />
        <label htmlFor="2016">2016</label>
      </li>
    </ul>*/}
  </div>
);

FilterByCrime.propTypes = {
  crimeCategories: PropTypes.array.isRequired,
  setCurrentCrime: PropTypes.func.isRequired
};

export default FilterByCrime;
