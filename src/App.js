import React, { Component } from 'react';
import Header from './Header';
import FilterControls from './FilterControls';
import Map from './Map';
import './App.css';
import { getForces, getNeighbourhoods } from './PoliceAPI';

export default class App extends Component {
  state = {
    area: '',
    filteredNeighbourhoods: [],
    filterQuery: '',
    forces: [{ id: '', name: '' }],
    isLoading: false,
    neighbourhood: {},
    neighbourhoods: []
  };

  //Update filterQuery and filteredNeighbourhoods based on filterQuery
  setFilter = filterQuery => {
    const lowerQuery = filterQuery.toLowerCase();
    const filteredNeighbourhoods = this.state.neighbourhoods.filter(hood =>
      hood.name.toLowerCase().includes(lowerQuery)
    );

    this.setState({ filterQuery, filteredNeighbourhoods }, () =>
      this.verifySelectedHoodInList()
    );
  };

  //Deselect current neighbourhood if it's not in filtered neighbourhoods
  //This means a selected neighbourhood can never be "hidden" from the user
  verifySelectedHoodInList = () => {
    const { neighbourhood, filteredNeighbourhoods } = this.state;
    !filteredNeighbourhoods.includes(neighbourhood) &&
      this.setState({ neighbourhood: {} });
  };

  //Sets current area and resets any state relating to a previous area
  setArea = area => {
    this.setState({ area: area, isLoading: true });
    const areaId = this.state.forces.find(force => force.name === area).id;
    getNeighbourhoods(areaId).then(neighbourhoods =>
      this.setState({
        neighbourhoods: neighbourhoods,
        filteredNeighbourhoods: neighbourhoods,
        neighbourhood: {},
        filterQuery: '',
        isLoading: false
      })
    );
  };

  setNeighbourhood = neighbourhood => {
    this.setState({ neighbourhood: neighbourhood });
  };

  componentDidMount() {
    getForces()
      .then(results => this.setState({ forces: results.map(force => force) }))
      //This line hard codes in the default area to load when the app is
      //initialised.  It can be removed to give the user a chance to select
      //which area they want to browse initially.  The reason it is included
      //is because the app spec explicitly says that there must be pins
      //rendered on the map when the app is first loaded.  "Leicestershire"
      //was chosen because it has a fast load time, and a good range of data.
      .then(() => this.setArea('Leicestershire'));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <FilterControls
            area={this.state.area}
            isLoading={this.state.isLoading}
            filteredNeighbourhoods={this.state.filteredNeighbourhoods}
            filterQuery={this.state.filterQuery}
            forceNames={this.state.forces.map(force => force.name)}
            neighbourhood={this.state.neighbourhood}
            setArea={this.setArea}
            setFilter={this.setFilter}
            setNeighbourhood={this.setNeighbourhood}
          />
          <Map
            availableNeighbourhoods={this.state.neighbourhoods.length}
            filteredNeighbourhoods={this.state.filteredNeighbourhoods}
            neighbourhood={this.state.neighbourhood}
            setNeighbourhood={this.setNeighbourhood}
          />
        </main>
      </div>
    );
  }
}
