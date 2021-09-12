import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function NumericalFilters() {
  const initialOptions = [

    { value: 'orbital_period', label: 'orbital_period' },
    { value: 'diameter', label: 'diameter' },
    { value: 'rotation_period', label: 'rotation_period' },
    { value: 'surface_water', label: 'surface_water' },
    { value: 'population', label: 'population' },
  ];
  const [options, setOptions] = useState(initialOptions);

  const { filter, setFilter, usedFilters, setUsedFilters } = useContext(Context);

  const INITIAL_STATE = {
    column: 'orbital_period',
    comparison: 'maior que',
    value: '',
  };

  const [filterState, setFilterState] = useState(INITIAL_STATE);

  const handleChange = ({ target: { name, value } }) => {
    setFilterState({ ...filterState, [name]: value });
  };

  const { column, comparison, value } = filterState;

  const handleSubmit = () => {
    setFilter({ filters: { ...filter.filters, filterByNumericValues: [filterState] } });
    setUsedFilters({ ...usedFilters, filterState });
    setOptions(options.filter((option) => option.value !== column));
    setFilterState({ ...INITIAL_STATE });
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ handleChange }
        name="column"
        value={ column }
      >
        {options.map((option, index) => (
          <option key={ index } value={ option.value }>{option.label}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleChange }
        name="comparison"
        value={ comparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ handleChange }
        name="value"
        value={ value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleSubmit }
      >
        Filter
      </button>
    </div>
  );
}

export default NumericalFilters;
