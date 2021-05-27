import React from 'react'
import './App.css';
import Row from './Row';
import requests from './requests'

function App() {
  return (
    <div className="App">
      <h1>Hey Raj! lets build Netflix Clone</h1>
      {/* Calling the Row component in App.js */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
 