import React, { useContext } from 'react';
import Context from '../context/Context';

function InputName() {
  const { filter, setFilter } = useContext(Context);

  const handleInput = ({ target: { value } }) => {
    setFilter(
      { ...filter, filters: { ...filter.filters, filterByName: { name: value } } },
    );
  };

  return (
    <div>
      <input type="text" data-testid="name-filter" onChange={ handleInput } />
    </div>
  );
}

export default InputName;
