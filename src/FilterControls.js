import React from 'react';
import LocationSelector from './LocationSelector';
import FilterByCrime from './FilterByCrime';
import NeighbourhoodInfo from './NeighbourhoodInfo';

const FilterControls = () => (
  <div>
    <LocationSelector />
    <FilterByCrime />
    <NeighbourhoodInfo />
  </div>
);

export default FilterControls;
