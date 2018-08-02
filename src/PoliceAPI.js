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
)