import React from 'react';
import './App.css';
import Table from './Components/Table';
import { Provider } from './context/Context';

function App() {
  return (
    <div>
      <Provider>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
