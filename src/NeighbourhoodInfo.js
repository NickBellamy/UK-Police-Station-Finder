import React from 'react';
import PropTypes from 'prop-types';

class NeighbourhoodInfo extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    filter: PropTypes.object.isRequired,
    setNeighbourhood: PropTypes.func.isRequired,
    neighbourhood: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired
  };

  render() {
    return (
      <div id="neighbourhood_component">
        <h2>Neighbourhoods</h2>
        <input
          type="text"
          placeholder="Filter neighbourhoods..."
          value={this.props.filter.query}
          onChange={event => {
            this.props.setFilter(event.target.value);
          }}
        />
        {this.props.isLoading ? (
          <div id="loading">
            <img src={require('./loading.gif')} alt="" />
          </div>
        ) : this.props.filter.neighbourhoods.length > 0 ? (
          <ul id="neighbourhood_list">
            {this.props.filter.neighbourhoods.map(neighbourhood => (
              <li key={neighbourhood.id}>
                <a
                  href="#"
                  onClick={() => this.props.setNeighbourhood(neighbourhood)}
                  className={
                    this.props.neighbourhood.id === neighbourhood.id
                      ? 'highlighted'
                      : undefined
                  }
                >
                  {neighbourhood.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div id="no_results">No results found!</div>
        )}
      </div>
    );
  }
}

export default NeighbourhoodInfo;
