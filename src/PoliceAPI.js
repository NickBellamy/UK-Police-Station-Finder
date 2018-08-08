import * as Helpers from './helpers';
const api = 'https://data.police.uk/api';

export const getForces = () =>
  fetch(`${api}/forces`)
    .then(res => res.json())
    .then(results => Helpers.cleanAreaNames(results));

export const getNeighbourhoods = area => {
  let neighbourhoodIds = [];

  const setNeighbourhoodIds = area =>
    fetch(`${api}/${area}/neighbourhoods`)
      .then(res => res.json())
      .then(res => res.map(hood => hood.id))
      .then(hoodIds => (neighbourhoodIds = hoodIds));

  const getNeighbourhoodData = () =>
    Promise.all(neighbourhoodIds.map(id => fetch(`${api}/${area}/${id}`)))
      .then(res => Promise.all(res.map(hood => hood.json())))
      .then(hoods =>
        hoods.map(hood => ({
          id: hood.id,
          name: Helpers.cleanNeighbourhoodNames(hood.name),
          location: {
            lat: parseFloat(hood.centre.latitude),
            lng: parseFloat(hood.centre.longitude)
          },
          website: hood.url_force,
          contact: hood.contact_details
        }))
      );

  return setNeighbourhoodIds(area)
    .then(() => getNeighbourhoodData())
    .then(neighbourhoods => Helpers.alphabetiseHoods(neighbourhoods));
};
