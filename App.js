
import React from 'react';
import './style.css';
import RandomNumber from './components/RamdomNumber';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Random Number & Counter App</h1>
      <RandomNumber />
      <Counter/>
    </div>
  );
}

export default App;