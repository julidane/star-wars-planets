import React from 'react';
import './App.css';
// import Table from './Components/Table';
// import Input from './Components/InputName';
import { Provider } from './context/Context';
// import NumericalFilters from './Components/NumericalFilters';
import AllComponents from './Components/AllComponents';

function App() {
  return (
    <div>
      <Provider>
        <AllComponents />
        {/* <Input />
        <NumericalFilters />
        <Table /> */}
      </Provider>
    </div>
  );
}

export default App;
