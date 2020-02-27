import React from 'react';
import './App.css';
import QueryAPI from './QueryAPI.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">     
        <p>
          List of countries.
        </p>
      </header>
        <QueryAPI />

    </div>
  );
}
export default App;
