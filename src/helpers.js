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

// Replaces "&amp;" and " and " with "&"
const convertToAmpersand = string =>
  string.replace(/&amp;/g, '&').replace(/ and /g, ' & ');
