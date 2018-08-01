import React, { Component } from 'react';
import Header from './Header';
import FilterControls from './FilterControls'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FilterControls />
      </div>
    );
  }
}

export default App;
