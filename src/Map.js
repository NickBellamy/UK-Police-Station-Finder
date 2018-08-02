import React, { Component } from 'react';
import apiConfig from './apiKeys';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from 'react-google-maps';

class Map extends Component {
  render() {
    const CrimeMap = withScriptjs(
      //Pass props in here..
      withGoogleMap(() => (
        <GoogleMap
          defaultCenter={{ lat: 52.9548, lng: -1.1581 }}
          defaultZoom={6}
        >
          <Marker position={{ lat: 52.9548, lng: -1.1581 }} />
        </GoogleMap>
      ))
    );

    return (
      <CrimeMap
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
