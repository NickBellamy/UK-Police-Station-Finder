import React from 'react';

export const cleanAreaNames = areas => {
  const disallowed = [
    ' Constabulary',
    ' Police Service',
    ' Police',
    'Police Service of '
  ];
  areas.map(area => {
    for (let i = 0; i < disallowed.length; i++) {
      area.name = area.name.replace(disallowed[i], '');
      area.name = convertToAmpersand(area.name);
    }
    return area;
  });
  return areas;
};

export const cleanNeighbourhoodNames = hood => {
  const disallowed = [
    ' (One Team)',
    ' policing team',
    ' Safer Neighbourhood Team',
    ' Community Police Team'
  ];
  for (let i = 0; i < disallowed.length; i++) {
    hood = hood.replace(disallowed[i], '');
  }
  return convertToAmpersand(hood);
};

export const alphabetiseHoods = hoods =>
  hoods.sort((a, b) => a.name.localeCompare(b.name));

// Replaces "&amp;" and " and " with "&"
const convertToAmpersand = string =>
  string.replace(/&amp;/g, '&').replace(/ and /g, ' & ');

//TODO: Refactor this monstrosity!
export const renderContact = contact => {
  if (contact.type === 'twitter') {
    if (contact.details.includes('twitter.com')) {
      return {
        type: contact.type,
        details: (
          //Replace '/#!' in url to make Surrey police twitter links work properly
          <a href={contact.details.replace('/#!', '')} target="blank">
            {contact.details.replace('/#!', '')}
          </a>
        )
      };
    } else {
      return {
        type: contact.type,
        details: (
          <a
            href={`https://twitter.com/${contact.details}`}
            target="blank"
          >{`https://twitter.com/${contact.details}`}</a>
        )
      };
    }
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
