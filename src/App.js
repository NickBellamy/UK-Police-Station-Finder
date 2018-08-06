import React, { Component } from 'react';
import Header from './Header';
import FilterControls from './FilterControls';
import Map from './Map';
import './App.css';
import { getForces, getNeighbourhoods } from './PoliceAPI';

class App extends Component {
  state = {
    forces: [],
    currentArea: '',
    currentNeighbourhoods: [],
    filteredNeighbourhoods: [],
    selectedNeighbourhood: '',
  };

  filterNeighbourhoods = query => {

    //TODO: Populate filteredNeighbourhoods in state
    console.log(query);
    
  }

  setCurrentArea = area => {
    getNeighbourhoods(area).then(neighbourhoods =>
      this.setState({
        currentArea: area,
        currentNeighbourhoods: neighbourhoods
      })
    );
  };

  selectNeighbourhood = neighbourhoodId => {
    this.setState({ selectedNeighbourhood: neighbourhoodId });
  };

  componentDidMount() {
    getForces().then(results =>
      this.setState({ forces: results.map(force => force.id) })
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="content">
          <FilterControls
          filterNeighbourhoods={this.filterNeighbourhoods}
            forceNames={this.state.forces}
            setCurrentArea={this.setCurrentArea}
            selectNeighbourhood={this.selectNeighbourhood}
            currentNeighbourhoods={this.state.currentNeighbourhoods}
          />
          <Map
            currentNeighbourhoods={this.state.currentNeighbourhoods}
            selectNeighbourhood={this.selectNeighbourhood}
            selectedNeighbourhood={this.state.selectedNeighbourhood}
          />
        </div>
      </div>
    );
  }
}

export default App;
