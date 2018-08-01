import React, { Component } from 'react';
import Header from './Header';
import FilterControls from './FilterControls';
import Map from './Map';
import './App.css';
import { getForces } from './PoliceAPI';

class App extends Component {   
  state = {
    forces: []
  };

  componentWillMount() {
    getForces()
    .then(results => this.setState({forces: results}));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="content">
          <FilterControls />
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
