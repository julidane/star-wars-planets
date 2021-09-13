import React, { useContext } from 'react';
import Context from '../context/Context';
import InputName from './InputName';
import Table from './Table';
import NumericalFilters from './NumericalFilters';
import FilterButtons from './FilterButtons';

function AllComponents() {
  const { data } = useContext(Context);
  const { filter } = useContext(Context);
  const { filters: { filterByName, filterByNumericValues } } = filter;
  const { name: filteredName } = filterByName;

  const filterData = () => {
    let filteredData = [...data];
    if (filteredName) {
      filteredData = filteredData.filter(
        (pName) => pName.name.toLowerCase().includes(filteredName),
      );
    }

    filterByNumericValues.forEach(({ comparison, column, value }) => {
      switch (comparison) {
      case 'maior que':
        filteredData = filteredData
          .filter((plnt) => parseInt(plnt[column], 10) > parseInt(value, 10));
        break;
      case 'menor que':
        filteredData = filteredData
          .filter((plnt) => parseInt(plnt[column], 10) < parseInt(value, 10));
        break;
      case 'igual a':
        filteredData = filteredData
          .filter((plnt) => plnt[column] === value);
        break;
      default:
        return filteredData;
      }
    });

    return filteredData;
  };

  return (
    <div>
      <InputName />
      <form>
        <NumericalFilters />
      </form>
      <FilterButtons />
      <Table data={ filterData() } />
    </div>
  );
}

export default AllComponents;
