import React from 'react';
import './App.css';
import DropdownDemo from './components/DirectUpdate/filters';
import Table from './components/DirectUpdate/Table';
import HeaderComponent from './components/header';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <HeaderComponent />
      <DropdownDemo />
      <Table />
      </div>
    </div>
  );
}

export default App;
