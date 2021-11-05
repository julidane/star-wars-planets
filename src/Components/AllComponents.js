import React, { useContext } from 'react';
import Context from '../context/Context';
import InputName from './InputName';
import Table from './Table';
import NumericalFilters from './NumericalFilters';
import RemoveFilterButtons from './RemoveFilterButtons';
import OrderFilter from './OrderFilter';
import Title from './Title';
import '../css/AllComponents.css';

function AllComponents() {
  const { data } = useContext(Context);
  const { filter } = useContext(Context);
  const { filters: { filterByName, filterByNumericValues, order } } = filter;
  const { name: filteredName } = filterByName;
  const { column: columnType, sort } = order;

  const filterData = () => {
    let filteredData = [...data];
    console.log(columnType);

    if (sort === 'ASC') {
      filteredData
        .sort(({ [columnType]: a }, { [columnType]: b }) => a.localeCompare(b))
        .sort((a, b) => (parseInt(a[columnType], 10) - (parseInt(b[columnType], 10))));
    } else if (sort === 'DESC') {
      filteredData
        .sort(({ [columnType]: a }, { [columnType]: b }) => b.localeCompare(a))
        .sort((a, b) => (parseInt(b[columnType], 10) - (parseInt(a[columnType], 10))));
    }

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
    <div className="all-components">
      <Title />
      <InputName />
      <form>
        <NumericalFilters />
        <OrderFilter />
      </form>
      <RemoveFilterButtons />
      <Table data={ filterData() } />
    </div>
  );
}

export default AllComponents;
