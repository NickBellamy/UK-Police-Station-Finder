import React from 'react';
import PropTypes from 'prop-types';
import LocationSelector from './LocationSelector';
import FilterByCrime from './FilterByCrime';
import NeighbourhoodInfo from './NeighbourhoodInfo';

const FilterControls = ({ forceNames, setCurrentArea }) => (
  <div>
    <LocationSelector forceNames={forceNames} setCurrentArea={setCurrentArea} />
    <FilterByCrime />
    <NeighbourhoodInfo />
  </div>
);

FilterControls.propTypes = {
  forceNames: PropTypes.array.isRequired,
  setCurrentArea: PropTypes.func.isRequired
};

export default FilterControls;
