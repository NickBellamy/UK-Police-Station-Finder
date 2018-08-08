import React from 'react';
import PropTypes from 'prop-types';

class NeighbourhoodInfo extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    filterNeighbourhoods: PropTypes.func.isRequired,
    filteredNeighbourhoods: PropTypes.array.isRequired,
    selectNeighbourhood: PropTypes.func.isRequired,
    selectedNeighbourhood: PropTypes.string.isRequired,
    updateFilterQuery: PropTypes.func.isRequired,
    filterQuery: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <h2>Neighbourhoods</h2>
        <div>
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
              <img src={require('./loading.gif')} />
            </div>
          ) : (
            <ul id="neighbourhood_list">
              {this.props.filteredNeighbourhoods.map(neighbourhood => (
                <li key={neighbourhood.id}>
                  <a
                    href="#"
                    onClick={() =>
                      this.props.selectNeighbourhood(neighbourhood.id)
                    }
                    className={
                      this.props.selectedNeighbourhood === neighbourhood.id
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
      </div>
    );
  }
}

export default NeighbourhoodInfo;
