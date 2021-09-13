import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function OrderFilter() {
  const { filter, setFilter } = useContext(Context);
  const { filters: { order } } = filter;
  const [selectState, setSelectState] = useState();
  const [radioState, setRadioState] = useState();

  const orderOptions = ['name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];
  const handleChangeSelect = ({ target: { value } }) => {
    setSelectState(value);
  };

  const handleChangeRadio = ({ target: { value } }) => {
    setRadioState(value);
  };

  const handleSubmit = () => {
    setFilter(
      { ...filter,
        filters: { ...filter.filters,
          order: { ...order, column: selectState, sort: radioState } } },
    );
  };

  return (
    <div>
      <label htmlFor="column-sort">
        {' '}
        Order by
        <select
          id="column-sort"
          data-testid="column-sort"
          onChange={ handleChangeSelect }
        >
          {orderOptions.map((orderItem, index) => (
            <option key={ index } name={ orderItem }>{orderItem}</option>
          ))}
        </select>
      </label>
      <label htmlFor="asc">
        Asc
        <input
          type="radio"
          name="order"
          id="asc"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ handleChangeRadio }
        />
      </label>
      <label htmlFor="desc">
        Desc
        <input
          type="radio"
          name="order"
          id="desc"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ handleChangeRadio }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleSubmit }
      >
        Order Now
      </button>

    </div>
  );
}

export default OrderFilter;
