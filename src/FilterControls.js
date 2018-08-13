import React from 'react';
import PropTypes from 'prop-types';
import LocationSelector from './LocationSelector';
import NeighbourhoodInfo from './NeighbourhoodInfo';

const FilterControls = ({
  area,
  filteredNeighbourhoods,
  forceNames,
  setArea,
  setNeighbourhood,
  neighbourhood,
  filterQuery,
  setFilter,
  isLoading
}) => {
  const toggleMenu = () => {
    document.getElementById('sidebar').classList.toggle('open');
    document.querySelector('#tab_arrow').classList.toggle('rotate');
  };

  return (
    <section id="sidebar" className="open">
      <div id="sidebar_main">
        <LocationSelector
          area={area}
          forceNames={forceNames}
          setArea={setArea}
        />
        <NeighbourhoodInfo
          isLoading={isLoading}
          filterQuery={filterQuery}
          setFilter={setFilter}
          filteredNeighbourhoods={filteredNeighbourhoods}
          setNeighbourhood={setNeighbourhood}
          neighbourhood={neighbourhood}
        />
      </div>
      <a id="tab_link" href="#" onClick={toggleMenu}>
        <div id="sidebar_tab">
          <div id="tab_arrow">{`<`}</div>
        </div>
      </a>
    </section>
  );
};

FilterControls.propTypes = {
  area: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  filter: PropTypes.object.isRequired,
  filterQuery: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  setNeighbourhood: PropTypes.func.isRequired,
  neighbourhood: PropTypes.object.isRequired,
  filteredNeighbourhoods: PropTypes.array.isRequired,
  forceNames: PropTypes.array.isRequired,
  setArea: PropTypes.func.isRequired
};

export default FilterControls;
