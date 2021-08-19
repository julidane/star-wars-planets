import React, { useContext } from 'react';
import { Context } from '../context/Context';
import InputName from './InputName';
import Table from './Table';
import NumericalFilters from './NumericalFilters';

function AllComponents() {
//   const { state, setState } = useContext(Context);

//   const handleInput = ({ target: { value } }) => {
//     setState({ ...state, name: value });
//   };

  return (
    <div>
      <InputName/>
      <form>
          <NumericalFilters/>
      </form>
      <Table/>
    </div>
  );
}

export default AllComponents;