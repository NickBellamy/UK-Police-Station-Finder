import React from 'react';
import PropTypes from 'prop-types';
import LocationSelector from './LocationSelector';
import FilterByCrime from './FilterByCrime';
import NeighbourhoodInfo from './NeighbourhoodInfo';

const FilterControls = ({
  crimeCategories,
  currentNeighbourhoods,
  forceNames,
  setCurrentArea,
  setCurrentCrime,
  selectNeighbourhood
}) => (
  <div>
    <LocationSelector forceNames={forceNames} setCurrentArea={setCurrentArea} />
    <FilterByCrime
      crimeCategories={crimeCategories}
      setCurrentCrime={setCurrentCrime}
    />
    <NeighbourhoodInfo
      currentNeighbourhoods={currentNeighbourhoods}
      selectNeighbourhood={selectNeighbourhood}
    />
  </div>
);

FilterControls.propTypes = {
  selectNeighbourhood: PropTypes.func.isRequired,
  crimeCategories: PropTypes.array.isRequired,
  currentNeighbourhoods: PropTypes.array.isRequired,
  forceNames: PropTypes.array.isRequired,
  setCurrentArea: PropTypes.func.isRequired,
  setCurrentCrime: PropTypes.func.isRequired
};

export default FilterControls;
