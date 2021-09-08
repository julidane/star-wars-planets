import React from 'react';
import './App.css';
// import Table from './Components/Table';
// import Input from './Components/InputName';
import ApiProvider from './context/Provider';
// import NumericalFilters from './Components/NumericalFilters';
import AllComponents from './Components/AllComponents';

function App() {
  return (
    <div>
      <ApiProvider>
        <AllComponents />
        {/* <Input />
        <NumericalFilters />
        <Table /> */}
      </ApiProvider>
    </div>
  );
}

export default App;
