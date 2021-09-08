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

  const { filter, setFilter } = useContext(Context);
  const { column } = filter;

  const handleColumn = ({ target: { value } }) => {
    setFilter({ ...filter, column: value, filtersOn: false, columnChange: false });
  };
  const handleComparison = ({ target: { value } }) => {
    setFilter({ ...filter, comparison: value, filtersOn: false, columnChange: false });
  };
  const handleNumberInput = ({ target: { value } }) => {
    setFilter({ ...filter, value, filtersOn: false, columnChange: false });
  };

  const handleSubmit = () => {
    setFilter({ ...filter, filtersOn: true, columnChange: true });
    setOptions(options.filter((option) => option.value !== column));
  };

  return (
    <div>
      <select data-testid="column-filter" onChange={ handleColumn }>
        {options.map((option, index) => (
          <option key={ index } value={ option.value }>{option.label}</option>
        ))}
      </select>
      <select data-testid="comparison-filter" onChange={ handleComparison }>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input type="number" data-testid="value-filter" onChange={ handleNumberInput } />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleSubmit }
      >
        Filtrar
      </button>
    </div>
  );
}

export default NumericalFilters;
