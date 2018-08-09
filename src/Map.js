import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderContact } from './helpers'
import apiConfig from './apiKeys';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';

const RenderMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultCenter={{ lat: 52.9548, lng: -1.1581 }} defaultZoom={6}>
      {props.neighbourhoods.map(hood => (
        <Marker
          key={hood.id}
          animation={hood.id === props.selectedNeighbourhood ? 1 : null}
          position={hood.location}
          onClick={() => props.selectNeighbourhood(hood.id)}
        >
          {props.selectedNeighbourhood === hood.id ? (
            <InfoWindow onCloseClick={() => props.selectNeighbourhood('')}>
              <div className="contact_details" style={{ maxWidth: `300px` }}>
                <h3>{hood.name}</h3>
                <ul>
                  {(hood.website && !hood.contact.website) && (
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
  ))
);

class Map extends Component {
  static propTypes = {
    filteredNeighbourhoods: PropTypes.array.isRequired,
    selectNeighbourhood: PropTypes.func.isRequired,
    selectedNeighbourhood: PropTypes.string.isRequired
  };

  render() {
    return (
      <RenderMap
        selectedNeighbourhood={this.props.selectedNeighbourhood}
        selectNeighbourhood={this.props.selectNeighbourhood}
        neighbourhoods={this.props.filteredNeighbourhoods}
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
