import React from 'react';
import PropTypes from 'prop-types';

class NeighbourhoodInfo extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    filteredNeighbourhoods: PropTypes.array.isRequired,
    selectNeighbourhood: PropTypes.func.isRequired,
    selectedNeighbourhood: PropTypes.object.isRequired,
    updateFilterQuery: PropTypes.func.isRequired,
    filterQuery: PropTypes.string.isRequired
  };

  render() {
    return (
      <div id="neighbourhood_component">
        <h2>Neighbourhoods</h2>
        <input
          type="text"
          placeholder="Filter neighbourhoods..."
          value={this.props.filterQuery}
          onChange={event => {
            this.props.updateFilterQuery(event.target.value);
          }}
        />
        {this.props.isLoading ? (
          <div id="loading">
            <img src={require('./loading.gif')} alt="" />
          </div>
        ) : (
          <ul id="neighbourhood_list">
            {this.props.filteredNeighbourhoods.map(neighbourhood => (
              <li key={neighbourhood.id}>
                <a
                  href="#"
                  onClick={() =>
                    this.props.selectNeighbourhood(neighbourhood)
                  }
                  className={
                    this.props.selectedNeighbourhood.id === neighbourhood.id
                      ? 'highlighted'
                      : undefined
                  }
                >
                  {neighbourhood.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default NeighbourhoodInfo;
