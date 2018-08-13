import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderContact } from './helpers';
import apiConfig from './apiKeys';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';

const RenderMap = withScriptjs(
  withGoogleMap(props => {
    let bounds = new window.google.maps.LatLngBounds();
    props.filteredNeighbourhoods.map(hood =>
      bounds.extend(
        new window.google.maps.LatLng(hood.location.lat, hood.location.lng)
      )
    );

    const OPTIONS = {
      maxZoom: 11,
      center: { lat: 52.9548, lng: -1.1581 }
    };

    return (
      <GoogleMap
        options={OPTIONS}
        //TODO: Refactor this!
        ref={map => {
          this.map = map;
          if (
            map &&
            !props.neighbourhood.id &&
            props.availableNeighbourhoods ===
              props.filteredNeighbourhoods.length
          ) {
            map.fitBounds(bounds);
          } else if (map && props.neighbourhood.id) {
            map.panTo(props.neighbourhood.location);
          } else {
            map && map.panTo(bounds.getCenter());
          }
        }}
      >
        {props.filteredNeighbourhoods.map(hood => (
          <Marker
            key={hood.id}
            animation={hood.id === props.neighbourhood.id ? 1 : null}
            position={hood.location}
            onClick={() => props.setNeighbourhood(hood)}
          >
            {props.neighbourhood.id === hood.id ? (
              <InfoWindow
                onCloseClick={() => {
                  props.setNeighbourhood({});
                  this.map.panTo(bounds.getCenter());
                }}
              >
                <div className="contact_details" style={{ maxWidth: `300px` }}>
                  <h3>{hood.name}</h3>
                  <ul>
                    {hood.website &&
                      !hood.contact.website && (
                        <li>
                          <span>website:</span>{' '}
                          <a href={hood.website} target="_blank">
                            {hood.website}
                          </a>
                        </li>
                      )}
                    {Object.keys(hood.contact)
                      .map(key => ({ type: key, details: hood.contact[key] }))
                      .map(contact => renderContact(contact))
                      .map(contactType => (
                        <li key={contactType.type}>
                          <span>{contactType.type}:</span> {contactType.details}
                        </li>
                      ))}
                  </ul>
                </div>
              </InfoWindow>
            ) : (
              ''
            )}
          </Marker>
        ))}
      </GoogleMap>
    );
  })
);

class Map extends Component {
  static propTypes = {
    availableNeighbourhoods: PropTypes.number.isRequired,
    filteredNeighbourhoods: PropTypes.array.isRequired,
    setNeighbourhood: PropTypes.func.isRequired,
    neighbourhood: PropTypes.object.isRequired
  };

  render() {
    return (
      <RenderMap
        availableNeighbourhoods={this.props.availableNeighbourhoods}
        neighbourhood={this.props.neighbourhood}
        setNeighbourhood={this.props.setNeighbourhood}
        filteredNeighbourhoods={this.props.filteredNeighbourhoods}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
          apiConfig.googleMapsKey
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div style={{ height: `calc(100vh - 90px)`, width: '100%' }} />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Map;
