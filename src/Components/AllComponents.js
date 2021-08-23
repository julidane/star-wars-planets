import React, { useContext } from 'react';
import { Context } from '../context/Context';
import InputName from './InputName';
import Table from './Table';
import NumericalFilters from './NumericalFilters';

function AllComponents() {
  let { data } = useContext(Context);
  const { state } = useContext(Context);
  const { name: filteredName, column, value, filtersOn, columnChange } = state;
  const { comparison } = state;
  let options = [
    { value: 'orbital_period', label: 'orbital_period' },
    { value: 'diameter', label: 'diameter' },
    { value: 'rotation_period', label: 'rotation_period' },
    { value: 'surface_water', label: 'surface_water' },
    { value: 'population', label: 'population' },
  ];

  if (filteredName) {
    data = data.filter((pName) => pName.name.toLowerCase().includes(filteredName));
  }

  if (filtersOn) {    
    switch (comparison) {
    case 'maior que':
      data = data.filter((plnt) => parseInt(plnt[column], 10) > parseInt(value, 10));
      break;
    case 'menor que':
      data = data.filter((plnt) => parseInt(plnt[column], 10) < parseInt(value, 10));
      break;
    case 'igual a':
      data = data.filter((plnt) => plnt[column] === value);
      break;
    default:
      data = data.filter((plnt) => parseInt(plnt[column], 10) > parseInt(value, 10));
    }
  }

  if (columnChange) {
    options = options.filter((option) => (option.value !== column));    
  }

  return (
    <div>
      <InputName />
      <form>
        <NumericalFilters options={ options } />
      </form>
      <Table data={ data } />
    </div>
  );
}

export default AllComponents;
