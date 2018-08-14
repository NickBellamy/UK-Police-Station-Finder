import React from 'react';
import PropTypes from 'prop-types';

const NeighbourhoodDetails = ({ hood }) => {
  const renderContact = contact => {
    if (contact.type === 'twitter') {
      !contact.details.includes('twitter.com') &&
        (contact.details = `https://twitter.com/${contact.details}`);
      //Replace '/#!' in url to make Surrey police twitter links work properly
      contact.details = contact.details.replace('/#!', '');
      return {
        type: contact.type,
        details: (
          <a href={contact.details} target="blank">
            {contact.details}
          </a>
        )
      };
    } else if (
      (contact.details.includes('.uk') || contact.details.includes('.co')) &&
      !contact.details.includes('@') &&
      !contact.details.includes(' ')
    ) {
      if (contact.details.includes('http')) {
        return {
          type: contact.type,
          details: (
            <a href={contact.details} target="blank">
              {contact.details}
            </a>
          )
        };
      } else {
        return {
          type: contact.type,
          details: (
            <a href={`http://${contact.details}`} target="blank">
              {contact.details}
            </a>
          )
        };
      }
    } else if (contact.details.includes('@') || contact.type === 'email') {
      return {
        type: contact.type,
        details: <a href={`mailto:${contact.details}`}>{contact.details}</a>
      };
    } else {
      return contact;
    }
  };

  return (
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
};

NeighbourhoodDetails.propTypes = {
  hood: PropTypes.object.isRequired
};

export default NeighbourhoodDetails;
