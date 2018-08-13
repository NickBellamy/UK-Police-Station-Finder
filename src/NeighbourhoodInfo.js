import React from 'react';
import PropTypes from 'prop-types';

const NeighbourhoodInfo = ({
  filter,
  isLoading,
  neighbourhood,
  setFilter,
  setNeighbourhood
}) => (
  <div id="neighbourhood_component">
    <h2>Neighbourhoods</h2>
    <input
      type="text"
      placeholder="Filter neighbourhoods..."
      value={filter.query}
      onChange={event => setFilter(event.target.value)}
    />
    {isLoading ? (
      <Loading />
    ) : filter.neighbourhoods.length > 0 ? (
      <NeighbourhoodList {...{ filter, neighbourhood, setNeighbourhood }} />
    ) : (
      <NoResults />
    )}
  </div>
);

const NeighbourhoodList = ({ filter, neighbourhood, setNeighbourhood }) => (
  <ul id="neighbourhood_list">
    {filter.neighbourhoods.map(hood => (
      <li key={hood.id}>
        <a
          href="#"
          onClick={() => setNeighbourhood(hood)}
          className={hood.id === neighbourhood.id ? 'highlighted' : undefined}
        >
          {hood.name}
        </a>
      </li>
    ))}
  </ul>
);

const Loading = () => (
  <div id="loading">
    <img src={require('./loading.gif')} alt="" />
  </div>
);

const NoResults = () => <div id="no_results">No results found!</div>;

NeighbourhoodInfo.propTypes = {
  filter: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  neighbourhood: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  setNeighbourhood: PropTypes.func.isRequired
};

NeighbourhoodList.propTypes = {
  filter: PropTypes.object.isRequired,
  neighbourhood: PropTypes.object.isRequired,
  setNeighbourhood: PropTypes.func.isRequired
};

export default NeighbourhoodInfo;
