import React, { useContext } from 'react';
import Context from '../context/Context';

function RemoveFilterButtons() {
  const { usedFilters, setUsedFilters, setOptions, data, setData, filter, setFilter,
  } = useContext(Context);
  const { filters: { filterByNumericValues } } = filter;
  let { used } = usedFilters;
  const initialOptions = [
    { value: 'orbital_period', label: 'orbital_period' },
    { value: 'diameter', label: 'diameter' },
    { value: 'rotation_period', label: 'rotation_period' },
    { value: 'surface_water', label: 'surface_water' },
    { value: 'population', label: 'population' },
  ];

  const handleClick = ({ target: { value } }) => {
    used = used.filter((selected) => selected.column !== value);
    const [usedColumns] = used;
    const updatedData = [...data];

    if (usedColumns) {
      const { column } = usedColumns;
      const updatedOptions = initialOptions
        .filter((initial) => (initial.value !== column));
      const updatedFilters = filterByNumericValues
        .filter((item) => (item.column !== column));
      setFilter(
        { filters: { ...filter.filters, filterByNumericValues: [updatedFilters] } },
      );
      setOptions(updatedOptions);
    } else {
      setOptions(initialOptions);
      setData(updatedData);
      setFilter({ filters: { ...filter.filters, filterByNumericValues: [] } });
    }
    setUsedFilters({ used });
  };

  return (
    <div>
      <ul>

        {used.map((item) => (
          <li key={ item.column } data-testid="filter">
            <p>
              {`${item.column} ${item.comparison} ${item.value}`}
              {' '}
            </p>
            <button
              type="button"
              value={ item.column }
              onClick={ handleClick }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RemoveFilterButtons;
