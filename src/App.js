import React from 'react'
import './App.css';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <h1>Hey Raj! lets build Netflix Clone</h1>
      {/* Calling the Row component in App.js */}
      <Row title="NETFLIX ORIGINALS"/>
      <Row title="Trending Now"/>
    </div>
  );
}

export default App;
 