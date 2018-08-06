import React from 'react';
import PropTypes from 'prop-types';
import LocationSelector from './LocationSelector';
import NeighbourhoodInfo from './NeighbourhoodInfo';

const FilterControls = ({
  currentNeighbourhoods,
  forceNames,
  setCurrentArea,
  selectNeighbourhood
}) => (
  <div>
    <LocationSelector forceNames={forceNames} setCurrentArea={setCurrentArea} />
    <NeighbourhoodInfo
      currentNeighbourhoods={currentNeighbourhoods}
      selectNeighbourhood={selectNeighbourhood}
    />
  </div>
);

FilterControls.propTypes = {
  selectNeighbourhood: PropTypes.func.isRequired,
  currentNeighbourhoods: PropTypes.array.isRequired,
  forceNames: PropTypes.array.isRequired,
  setCurrentArea: PropTypes.func.isRequired,
};

export default FilterControls;
