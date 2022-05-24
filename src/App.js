import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading';
import Tours from './components/Tours';
import data from './utils/data.js';
import Button from '@mui/material/Button';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [reload, setReload] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    if (newTours.length === 0) {
      setReload(true);
    }
    setTours(newTours);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTours(data);
    }, 2000);
  }, []);

  function handleRefresh() {
    window.location.reload();
    setReload(!reload);
  }


  if(loading) {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Tours Project</h1>
        <Loading />
      </header>
    </div>
    )
  }

  if(reload) {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Tours Project</h1>
        <Button onClick={handleRefresh} size="small">Refresh</Button>
      </header>
    </div>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tours Project</h1>
        {tours.map((tours, index) => (
          <Tours key={index} {...tours} removeTour={removeTour}/>
        ))}
      </header>
    </div>
  );
}

export default App;
