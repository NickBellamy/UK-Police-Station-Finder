import React, { Component } from 'react';
import Header from './Header';
import FilterControls from './FilterControls';
import Map from './Map';
import './App.css';
import { getForces } from './PoliceAPI';

class App extends Component {
  state = {
    forces: [],
    currentArea: ''
  };

  setCurrentArea = area => {
    this.setState({ currentArea: area });
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
            forceNames={this.state.forces}
            setCurrentArea={this.setCurrentArea}
          />
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
