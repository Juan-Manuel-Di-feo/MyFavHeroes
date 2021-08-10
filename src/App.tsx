import React, { useEffect, useState } from 'react';
import './App.css';

import useHeroService from './components/service-loader/service-loader';
import MyLoader from './components/content-loader/content-loader.component';

import HeroCard from './components/hero-card/hero-card.component';
import { ReactComponent as Logo } from './assets/logo/logo.svg'

const App = () => {
  const service = useHeroService();

  return (
    <div className="App">
      <div className='header'>
        <div className="logo"/>
      </div>
      <div className="hero-list">
        {service.status === 'loading' ?
          <MyLoader /> : ''}

        {service.status === 'loaded' &&
          service.payload.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))}
      </div>

    </div>
  );
}

export default App;
