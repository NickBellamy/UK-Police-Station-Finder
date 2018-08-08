import React, { Component } from 'react';
import Header from './Header';
import FilterControls from './FilterControls';
import Map from './Map';
import './App.css';
import { getForces, getNeighbourhoods } from './PoliceAPI';

class App extends Component {
  state = {
    forces: [{ id: '', name: '' }],
    currentArea: '',
    currentNeighbourhoods: [],
    filterQuery: '',
    filteredNeighbourhoods: [],
    selectedNeighbourhood: '',
    isLoading: false
  };

  updateFilterQuery = query => {
    this.setState({ filterQuery: query }, () => this.filterNeighbourhoods());
  };

  filterNeighbourhoods = () => {
    let lowerQuery = this.state.filterQuery.toLowerCase();
    const filteredNeighbourhoods = this.state.currentNeighbourhoods.filter(
      hood => hood.name.toLowerCase().includes(lowerQuery)
    );
    this.setState({ filteredNeighbourhoods });
  };

  setCurrentArea = area => {
    this.setState({ isLoading: true });
    const areaId = this.state.forces.find(force => force.name === area).id;
    getNeighbourhoods(areaId).then(neighbourhoods =>
      this.setState({
        currentArea: area,
        currentNeighbourhoods: neighbourhoods,
        filteredNeighbourhoods: neighbourhoods,
        selectedNeighbourhood: '',
        filterQuery: '',
        isLoading: false
      })
    );
  };

  selectNeighbourhood = neighbourhoodId => {
    this.setState({ selectedNeighbourhood: neighbourhoodId });
  };

  componentDidMount() {
    getForces().then(results =>
      this.setState({ forces: results.map(force => force) })
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="content">
          <FilterControls
            isLoading={this.state.isLoading}
            filterNeighbourhoods={this.filterNeighbourhoods}
            forceNames={this.state.forces.map(force => force.name)}
            setCurrentArea={this.setCurrentArea}
            selectNeighbourhood={this.selectNeighbourhood}
            selectedNeighbourhood={this.state.selectedNeighbourhood}
            filteredNeighbourhoods={this.state.filteredNeighbourhoods}
            updateFilterQuery={this.updateFilterQuery}
            filterQuery={this.state.filterQuery}
          />
          <Map
            filteredNeighbourhoods={this.state.filteredNeighbourhoods}
            selectNeighbourhood={this.selectNeighbourhood}
            selectedNeighbourhood={this.state.selectedNeighbourhood}
          />
        </div>
      </div>
    );
  }
}

export default App;
