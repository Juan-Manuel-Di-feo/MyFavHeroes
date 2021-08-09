import React, { useEffect, useState } from 'react';
import './App.css';
import useHeroService from './components/service-loader/service-loader';



const App = () => {
  const service = useHeroService();
  

if (service.status === 'loaded') {
  console.log(service.payload)
}
  return (
    <div className="App">
      {service.status === 'loaded' &&
        service.payload.map(hero => (
          <div key={hero.id}>{hero.name}</div>
        ))}
    </div>
  );
}

export default App;
