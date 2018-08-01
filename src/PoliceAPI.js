const api = 'https://data.police.uk/api';

export const getForces = () => (
    fetch(`${api}/forces`)
    .then(res => res.json())
)