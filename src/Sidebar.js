import React from 'react';
import PropTypes from 'prop-types';
import LocationSelector from './LocationSelector';
import NeighbourhoodInfo from './NeighbourhoodInfo';

const Sidebar = ({
  area,
  filter,
  forceNames,
  isLoading,
  neighbourhood,
  setArea,
  setFilter,
  setNeighbourhood
}) => (
  <section id="sidebar" className="open">
    <div id="sidebar_main">
      <LocationSelector area={area} forceNames={forceNames} setArea={setArea} />
      <NeighbourhoodInfo
        isLoading={isLoading}
        setFilter={setFilter}
        filter={filter}
        setNeighbourhood={setNeighbourhood}
        neighbourhood={neighbourhood}
      />
    </div>
    <Tab />
  </section>
);

const Tab = () => (
  <a
    id="tab_link"
    href="#"
    onClick={() => {
      document.getElementById('sidebar').classList.toggle('open');
      document.getElementById('tab_arrow').classList.toggle('rotate');
    }}
  >
    <div id="sidebar_tab">
      <div id="tab_arrow">{`<`}</div>
    </div>
  </a>
);

Sidebar.propTypes = {
  area: PropTypes.string.isRequired,
  filter: PropTypes.object.isRequired,
  forceNames: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  neighbourhood: PropTypes.object.isRequired,
  setArea: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  setNeighbourhood: PropTypes.func.isRequired
};

export default Sidebar;
