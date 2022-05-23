import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading';
import Tours from './components/Tours';
import data from './utils/data.js';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTours(data);
    }, 2000);
  }, []);


  if(loading) {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Tours</h1>
        <Loading />
      </header>
    </div>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tours Project</h1>
        {tours.map(tours => (
          <Tours key={tours.id} {...tours} />
        ))}
      </header>
    </div>
  );
}

export default App;
