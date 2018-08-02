import React from 'react';
import PropTypes from 'prop-types';
import LocationSelector from './LocationSelector';
import FilterByCrime from './FilterByCrime';
import NeighbourhoodInfo from './NeighbourhoodInfo';

const FilterControls = ({
  crimeCategories,
  forceNames,
  setCurrentArea,
  setCurrentCrime
}) => (
  <div>
    <LocationSelector forceNames={forceNames} setCurrentArea={setCurrentArea} />
    <FilterByCrime
      crimeCategories={crimeCategories}
      setCurrentCrime={setCurrentCrime}
    />
    <NeighbourhoodInfo />
  </div>
);

FilterControls.propTypes = {
  crimeCategories: PropTypes.array.isRequired,
  forceNames: PropTypes.array.isRequired,
  setCurrentArea: PropTypes.func.isRequired,
  setCurrentCrime: PropTypes.func.isRequired
};

export default FilterControls;
