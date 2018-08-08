import React from 'react';
import PropTypes from 'prop-types';
import LocationSelector from './LocationSelector';
import NeighbourhoodInfo from './NeighbourhoodInfo';

const FilterControls = ({
  filteredNeighbourhoods,
  forceNames,
  setCurrentArea,
  selectNeighbourhood,
  selectedNeighbourhood,
  filterNeighbourhoods,
  filterQuery,
  updateFilterQuery
}) => {
  const toggleMenu = () => {
    document.getElementById('sidebar').classList.toggle('open');
    document.querySelector('#tab_arrow').classList.toggle('rotate');
  };

  return (
    <div id="sidebar">
      <div id="sidebar_main">
        <LocationSelector
          forceNames={forceNames}
          setCurrentArea={setCurrentArea}
        />
        <NeighbourhoodInfo
          filterQuery={filterQuery}
          updateFilterQuery={updateFilterQuery}
          filteredNeighbourhoods={filteredNeighbourhoods}
          filterNeighbourhoods={filterNeighbourhoods}
          selectNeighbourhood={selectNeighbourhood}
          selectedNeighbourhood={selectedNeighbourhood}
        />
      </div>
      <a id="tab_link" href="#" onClick={toggleMenu}>
        <div id="sidebar_tab">
          <div id="tab_arrow">></div>
        </div>
      </a>
    </div>
  );
};

FilterControls.propTypes = {
  filterQuery: PropTypes.string.isRequired,
  updateFilterQuery: PropTypes.func.isRequired,
  filterNeighbourhoods: PropTypes.func.isRequired,
  selectNeighbourhood: PropTypes.func.isRequired,
  selectedNeighbourhood: PropTypes.string.isRequired,
  filteredNeighbourhoods: PropTypes.array.isRequired,
  forceNames: PropTypes.array.isRequired,
  setCurrentArea: PropTypes.func.isRequired
};

export default FilterControls;
