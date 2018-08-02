import React, { Component } from 'react';
import Header from './Header';
import FilterControls from './FilterControls';
import Map from './Map';
import './App.css';
import { getForces, getCrimes, getNeighbourhoods } from './PoliceAPI';

class App extends Component {
  state = {
    forces: [],
    crimeCategories: [],
    currentArea: '',
    currentNeighbourhoods: [],
    currentCrime: ''
  };

  setCurrentArea = area => {
    getNeighbourhoods(area).then(neighbourhoods =>
      this.setState({
        currentArea: area,
        currentNeighbourhoods: neighbourhoods
      })
    );
  };

  setCurrentCrime = crimeName => {
    const currentCrime = this.state.crimeCategories.filter(
      crime => crime.name === crimeName
    )[0];
    this.setState({ currentCrime });
  };

  componentDidMount() {
    getForces().then(results =>
      this.setState({ forces: results.map(force => force.id) })
    );
    getCrimes().then(results =>
      this.setState({ crimeCategories: results, currentCrime: results[0] })
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="content">
          <FilterControls
            crimeCategories={this.state.crimeCategories}
            forceNames={this.state.forces}
            setCurrentArea={this.setCurrentArea}
            setCurrentCrime={this.setCurrentCrime}
            currentNeighbourhoods={this.state.currentNeighbourhoods}
          />
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
