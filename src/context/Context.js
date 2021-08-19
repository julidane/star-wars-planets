import React, { useEffect, createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();
function ApiProvider({ children }) {
  const [data, setData] = useState([]);
  const [state, setState] = useState({ filters: { filtersByName: { name: '' } }, filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    }
  ] });

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((datas) => datas.json());
      results.forEach((result) => { delete result.residents; });
      setData(results);
    };
    getPlanets();
  }, []);
  const context = { data, state, setState };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.objectOf(Symbol).isRequired,
};

export { Context, ApiProvider as Provider };
