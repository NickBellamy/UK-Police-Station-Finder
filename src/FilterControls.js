import React from 'react';
import PropTypes from 'prop-types';
import LocationSelector from './LocationSelector';
import NeighbourhoodInfo from './NeighbourhoodInfo';

const FilterControls = ({
  filteredNeighbourhoods,
  forceNames,
  setCurrentArea,
  selectNeighbourhood,
  filterNeighbourhoods
}) => (
  <div>
    <LocationSelector forceNames={forceNames} setCurrentArea={setCurrentArea} />
    <NeighbourhoodInfo
    filteredNeighbourhoods={filteredNeighbourhoods}
      filterNeighbourhoods={filterNeighbourhoods}
      selectNeighbourhood={selectNeighbourhood}
    />
  </div>
);

FilterControls.propTypes = {
    filterNeighbourhoods: PropTypes.func.isRequired,
  selectNeighbourhood: PropTypes.func.isRequired,
  filteredNeighbourhoods: PropTypes.array.isRequired,
  forceNames: PropTypes.array.isRequired,
  setCurrentArea: PropTypes.func.isRequired,
};

export default FilterControls;
