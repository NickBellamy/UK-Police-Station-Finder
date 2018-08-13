import React from 'react';
import PropTypes from 'prop-types';
import { renderContact } from './helpers';

const StationDetails = ({ hood }) => (
  <div className="contact_details">
    <h3>{hood.name}</h3>
    <ul>
      {//Prevent duplication of website data if website is also in contacts
      hood.website &&
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
);

StationDetails.propTypes = {
  hood: PropTypes.object.isRequired
};

export default StationDetails;
