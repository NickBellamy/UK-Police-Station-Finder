import React from 'react';
import PropTypes from 'prop-types';

class NeighbourhoodInfo extends React.Component {
  protoTypes = {
    filterNeighbourhoods: PropTypes.func.isRequired,
    currentNeighbourhoods: PropTypes.array.isRequired,
    selectNeighbourhood: PropTypes.func.isRequired
  };

  state = {
    filterQuery: ''
  };

  updateFilterQuery = query => {
    this.setState({ filterQuery: query }, () => this.props.filterNeighbourhoods(this.state.filterQuery));
  };

  render() {
    return (
      <div>
        <h2>Neighbourhoods</h2>
        {this.props.currentNeighbourhoods.length > 0 ? (
          <input
            type="text"
            placeholder="Filter neighbourhoods..."
            value={this.state.filterQuery}
            onChange={event => {
              this.updateFilterQuery(event.target.value);
            }}
          />
        ) : (
          ''
        )}
        <ul>
          {this.props.currentNeighbourhoods.map(neighbourhood => (
            <li key={neighbourhood.id}>
              <a
                href="#"
                onClick={() => this.props.selectNeighbourhood(neighbourhood.id)}
              >
                {neighbourhood.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NeighbourhoodInfo;
