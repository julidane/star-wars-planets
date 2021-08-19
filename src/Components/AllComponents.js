import React, { useContext } from 'react';
import { Context } from '../context/Context';
import InputName from './InputName';
import Table from './Table';
import NumericalFilters from './NumericalFilters';

function AllComponents() {
  let { data } = useContext(Context);
  const { state } = useContext(Context);
  const { name: filteredName, column, value, filtersOn } = state;
  const { comparison } = state;

  if (filteredName) {
    data = data.filter((pName) => pName.name.toLowerCase().includes(filteredName));
  }

  if (filtersOn) {
    console.log(typeof data[0].diameter);
    console.log(typeof value);
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

  return (
    <div>
      <InputName />
      <form>
        <NumericalFilters />
      </form>
      <Table data={ data } />
    </div>
  );
}

export default AllComponents;
