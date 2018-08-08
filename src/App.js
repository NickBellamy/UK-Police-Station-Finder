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
    getForces()
      .then(results => this.setState({ forces: results.map(force => force) }))
      //This line hard codes in the default area to load when the app is
      //initialised.  It can be removed to give the user a chance to select
      //which area they want to browse initially.  The reason it is included
      //is because the app spec explicitly says that there must be pins
      //rendered on the map when the app is first loaded.  "Cambridgeshire"
      //was chosen because it has a relatively fast load time.
      .then(() => this.setCurrentArea('Cambridgeshire'));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="content">
          <FilterControls
            currentArea={this.state.currentArea}
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
