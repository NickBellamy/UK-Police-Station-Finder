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
    }
    return area;
  });
  return areas;
};
