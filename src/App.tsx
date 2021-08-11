/* tslint:disable */
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import './App.css';
import { heroSpec } from './interfaces/interfaces';
import useHeroService from './components/service-loader/service-loader';
import { Service, ServiceInit } from "./services/services";
import HeroList from './components/hero-list/hero-list.component';
import Loading from './components/content-loader/content-loader.component';
import LikedList from './components/liked-list/liked-list.component';
import GridList from './components/grid-list/grid-list.component';

const App = () => {
  const [heroState, setHeroState] = useState<heroSpec[]>([]);
  const [heroToSearch, setHeroTosearch] = useState<string>('');
  const [hide, setHide] = useState<Boolean>(false)
  const service = useHeroService();

  useEffect(() => {
    if (service.status === 'loaded') {
      setHeroState(service.payload)
    }
  }, [service.status])

  const changeLikedStatus = (cardId: Number) => {
    if (service.status === 'loaded') {
      const heroCard = heroState.find(card => card.id === cardId) || { liked: Boolean };
      heroCard.liked = !heroCard.liked
      setHeroState([...heroState]);
    }

  }
  const setText = (event: Event) => {
    setHeroTosearch(event.target.value)
  }

  
    return (
      <div className="App">
        <div className='header'>
          <div className="logo" />
        </div>
          
  
        <div className='list-wrapper'>
          {service.status === 'loading' &&
            <Loading />}
  
          {service.status === 'loaded' &&
          <>
            <LikedList  
            likeFunction={changeLikedStatus} 
            displayList={heroState.filter(card => card.liked)}  
            className='liked-hero-cardlist'
            hide={hide}
            setHide={setHide}
             /> 
             <input type="text" onChange={setText} placeholder="Enter hero name here and press enter" className='search-bar'/>
            <GridList  
            heroState={heroState}
            likeFunction={changeLikedStatus} 
            displayList={heroState.filter(card => !card.liked).filter(hero=>hero.name.includes(heroToSearch)||hero.biography.fullName.includes(heroToSearch))}  
            className='unliked-hero-cardlist' />
          </>}
        </div>
  
      </div>
    );


}

export default App;
