import React, { Component } from 'react';
import apiConfig from './apiKeys';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';

//TODO: Toggling the infowindows on marker click causes a complete re-
//render of the map.  I'm not entirely sure why this is, but it's not
//ideal.  If I hsve time at the end of the project, I will revisit
//this and try to make it add new markers without re-rendering the map
class Map extends Component {
  render() {
    const CrimeMap = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultCenter={{ lat: 52.9548, lng: -1.1581 }}
          defaultZoom={6}
        >
          {props.neighbourhoods.map(hood => (
            <Marker
              key={hood.id}
              animation={hood.id === props.selectedNeighbourhood ? 1 : null}
              position={hood.location}
              onClick={() => props.selectNeighbourhood(hood.id)}
            >
              {props.selectedNeighbourhood === hood.id ? (
                <InfoWindow>
                  <div>
                    <span>{hood.name}</span>
                    <ul>
                        <li>website: {hood.website}</li>
                      {Object.keys(hood.contact)
                        .map(key => `${key}: ${hood.contact[key]}`)
                        .map(contactType => <li>{contactType}</li>)}
                    </ul>
                  </div>
                </InfoWindow>
              ) : (
                ''
              )}
            </Marker>
          ))}
        </GoogleMap>
      ))
    );

    return (
      <CrimeMap
        selectedNeighbourhood={this.props.selectedNeighbourhood}
        selectNeighbourhood={this.props.selectNeighbourhood}
        neighbourhoods={this.props.currentNeighbourhoods}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
          apiConfig.googleMapsKey
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `70vh`, width: '100%' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Map;
