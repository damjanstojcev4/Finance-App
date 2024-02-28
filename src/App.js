import React from 'react';
import './App.css';
import Budget from './components/Budget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Finance App</h1>
      </header>
      <main>
        <Budget />
      </main>
    </div>
  );
}

export default App;
