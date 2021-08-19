import React, { useContext } from 'react';
import { Context } from '../context/Context';

function NumericalFilters() {
  const { state, setState } = useContext(Context);
  // let { data } = useContext(Context);
  const handleColumn = ({ target: { value } }) => {
    setState({ ...state, column: value, filtersOn: false });
    // setState({filters:{...state}, filterByNumericValues:[{...state, column:value}]});
    // setState({filterByNumericValues:[{...state, column:value}]});
  };
  const handleComparison = ({ target: { value } }) => {
    setState({ ...state, comparison: value, filtersOn: false });
    // setState({filters:{...state}, filterByNumericValues:[{...state, comparison:value}]});
  };
  const handleNumberInput = ({ target: { value } }) => {
    setState({ ...state, value, filtersOn: false });
    // setState({ ...state, filterByNumericValues: [{...state, value: value}]});
  };

  const handleSubmit = () => {
    setState({ ...state, filtersOn: true });
  };

  return (
    <div>
      <select data-testid="column-filter" onChange={ handleColumn }>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
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
