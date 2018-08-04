const api = 'https://data.police.uk/api';

export const getForces = () => fetch(`${api}/forces`).then(res => res.json());

export const getCrimes = () =>
  fetch(`${api}/crime-categories`).then(res => res.json());

export const getNeighbourhoods = area => {
  let neighbourhoodIds = [];
  return getNeighbourhoodIds(area)
    .then(hoodIds => (neighbourhoodIds = hoodIds))
    .then(() =>
      Promise.all(neighbourhoodIds.map(id => fetch(`${api}/${area}/${id}`)))
    )
    .then(res => Promise.all(res.map(hood => hood.json())))
    .then(hoods =>
      hoods.map(hood => ({
        id: hood.id,
        name: hood.name,
        location: {
          lat: parseFloat(hood.centre.latitude),
          lng: parseFloat(hood.centre.longitude)
        }
      }))
    );
};

const getNeighbourhoodIds = area =>
  fetch(`${api}/${area}/neighbourhoods`)
    .then(res => res.json())
    .then(res => res.map(hood => hood.id));
