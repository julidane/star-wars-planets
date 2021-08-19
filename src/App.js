import React from 'react';
import './App.css';
import Table from './Components/Table';
import Input from './Components/InputName';
import { Provider } from './context/Context';

function App() {
  return (
    <div>
      <Provider>
        <Input />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
