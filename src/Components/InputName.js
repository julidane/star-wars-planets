import React, { useContext } from 'react';
import Context from '../context/Context';

function InputName() {
  const { state, setState } = useContext(Context);

  const handleInput = ({ target: { value } }) => {
    // setState({ ...state, name: value });
    setState({ ...state, filters: { filterByName: { name: value } } });
    // setState( { filters: {...state, filterByName: { name: value }}});
    // setState( {...state, filterByName: { name: value }});
  };

  return (
    <div>
      <input type="text" data-testid="name-filter" onChange={ handleInput } />
    </div>
  );
}

export default InputName;
