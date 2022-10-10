import React from 'react';
import './App.css';
import DropdownDemo from './components/DirectUpdate/filters';
import Table from './components/DirectUpdate/Table';
import HeaderComponent from './components/header';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <DropdownDemo />
      <Table />
    </div>
  );
}

export default App;
