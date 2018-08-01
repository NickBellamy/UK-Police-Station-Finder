import React from 'react';
import PropTypes from 'prop-types';
import LocationSelector from './LocationSelector';
import FilterByCrime from './FilterByCrime';
import NeighbourhoodInfo from './NeighbourhoodInfo';

const FilterControls = ({ forceNames }) => (
  <div>
    <LocationSelector forceNames={forceNames} />
    <FilterByCrime />
    <NeighbourhoodInfo />
  </div>
);

FilterControls.propTypes = {
  forceNames: PropTypes.array.isRequired
};

export default FilterControls;
