const api = 'https://data.police.uk/api';

export const getForces = () => fetch(`${api}/forces`).then(res => res.json());

export const getCrimes = () =>
  fetch(`${api}/crime-categories`).then(res => res.json());

//TOOD: There may be a cleaner way to implement this function.  Currently the
//map of the boundaries onto each neighbourhood object relies on the fact that
//the boundaries are iterated over in the same order as the Ids were applied.
//This is always the case, but it isn't implicitly clear.  It may be a better
//idea to add the neighbourhood id to the neighbourhoodBoundaries array, so when
//neighbourhoods() is called, the boundaries can be tied to the neighbourhood
//using the id, rather than relying on the index parameter of the map function.
export const getNeighbourhoods = area => {
  let neighbourhoodIds = [];
  let neighbourhoodBoundaries = [];

  const setNeighbourhoodIds = area =>
    fetch(`${api}/${area}/neighbourhoods`)
      .then(res => res.json())
      .then(res => res.map(hood => hood.id))
      .then(hoodIds => (neighbourhoodIds = hoodIds));

  const setNeighbourhoodBoundaries = area =>
    Promise.all(
      neighbourhoodIds.map(id => fetch(`${api}/${area}/${id}/boundary`))
    )
      .then(res => Promise.all(res.map(hood => hood.json())))
      .then(hoodBounds => (neighbourhoodBoundaries = hoodBounds));

  const neighbourhoods = () =>
    Promise.all(neighbourhoodIds.map(id => fetch(`${api}/${area}/${id}`)))
      .then(res => Promise.all(res.map(hood => hood.json())))
      .then(hoods =>
        hoods.map((hood, index) => ({
          id: hood.id,
          name: hood.name,
          location: {
            lat: parseFloat(hood.centre.latitude),
            lng: parseFloat(hood.centre.longitude)
          },
          boundary: neighbourhoodBoundaries[index]
        }))
      );

  return setNeighbourhoodIds(area)
    .then(() => setNeighbourhoodBoundaries(area))
    .then(() => neighbourhoods());
};
