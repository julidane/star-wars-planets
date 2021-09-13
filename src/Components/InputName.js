import React, { useContext } from 'react';
import Context from '../context/Context';
import '../css/InputName.css';

function InputName() {
  const { filter, setFilter } = useContext(Context);

  const handleInput = ({ target: { value } }) => {
    setFilter(
      { ...filter, filters: { ...filter.filters, filterByName: { name: value } } },
    );
  };

  return (
    <div className="input-name-div">
      <p>Search by Name </p>
      <input type="text" data-testid="name-filter" onChange={ handleInput } />
    </div>
  );
}

export default InputName;
