import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context/Context';

function NumericalFilters(props) {
  const { options } = props;

  const { state, setState } = useContext(Context);
  const handleColumn = ({ target: { value } }) => {
    setState({ ...state, column: value, filtersOn: false, columnChange: false });
  };
  const handleComparison = ({ target: { value } }) => {
    setState({ ...state, comparison: value, filtersOn: false, columnChange: false });
  };
  const handleNumberInput = ({ target: { value } }) => {
    setState({ ...state, value, filtersOn: false, columnChange: false });
  };

  const handleSubmit = () => {
    setState({ ...state, filtersOn: true, columnChange: true });
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

NumericalFilters.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default NumericalFilters;
