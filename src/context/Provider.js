import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function ApiProvider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(
    { filters: {
      filterByName: { name: '' },
      filterByNumericValues: [],
      order: {
        column: 'name',
        sort: 'ASC',
      } } },
  );

  const [options, setOptions] = useState(
    [{ value: 'orbital_period', label: 'orbital_period' },
      { value: 'diameter', label: 'diameter' },
      { value: 'rotation_period', label: 'rotation_period' },
      { value: 'surface_water', label: 'surface_water' },
      { value: 'population', label: 'population' }],
  );

  const [usedFilters, setUsedFilters] = useState({ used: [] });

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((datas) => datas.json());
      results.forEach((result) => { delete result.residents; });
      setData(results);
    };
    getPlanets();
  }, []);

  const context = {
    data, setData, filter, setFilter, options, setOptions, usedFilters, setUsedFilters };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.objectOf(Symbol).isRequired,
};

export default ApiProvider;
