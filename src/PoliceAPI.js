const api = 'https://data.police.uk/api';

export const getForces = () => (
    fetch(`${api}/forces`)
    .then(res => res.json())
)

export const getCrimes = () => (
    fetch(`${api}/crime-categories`)
    .then(res => res.json())
)

export const getNeighbourhoods = area => (
    fetch(`${api}/${area}/neighbourhoods`)
    .then(res => res.json())
    .then(res => res.map(hood => 
        ({name: hood.name.replace('&amp;', '&'),id: hood.id})
      )
    )
)