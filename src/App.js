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
    filteredNeighbourhoods: [],
    selectedNeighbourhood: ''
  };

  filterNeighbourhoods = query => {
    let lowerQuery = query.toLowerCase();
    const filteredNeighbourhoods = this.state.currentNeighbourhoods.filter(
      hood => hood.name.toLowerCase().includes(lowerQuery)
    );
    this.setState({ filteredNeighbourhoods });
  };

  setCurrentArea = area => {
    const areaId = this.state.forces.find(force => force.name === area).id;
    getNeighbourhoods(areaId).then(neighbourhoods =>
      this.setState({
        currentArea: area,
        currentNeighbourhoods: neighbourhoods,
        filteredNeighbourhoods: neighbourhoods
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
            filterNeighbourhoods={this.filterNeighbourhoods}
            forceNames={this.state.forces.map(force => force.name)}
            setCurrentArea={this.setCurrentArea}
            selectNeighbourhood={this.selectNeighbourhood}
            filteredNeighbourhoods={this.state.filteredNeighbourhoods}
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
