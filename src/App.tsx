import React, { useEffect, useState } from 'react';
import './App.css';
import { heroSpec } from './interfaces/interfaces';
import useHeroService from './components/service-loader/service-loader';
import { Service, ServiceInit } from "./services/services";
import HeroList from './components/hero-list/hero-list.component';
import Loading from './components/content-loader/content-loader.component';
import LikedList from './components/liked-list/liked-list.component';

const App = () => {
  const [heroState, setHeroState] = useState<heroSpec[]>([]);
  const service = useHeroService();

  useEffect(()=>{
    if (service.status === 'loaded'){
      setHeroState(service.payload)
    }
  },[service.status])

  const changeLikedStatus= (cardId: Number) => {
    if(service.status === 'loaded'){
    const heroCard = heroState.find(card => card.id === cardId)||{liked:Boolean};
    heroCard.liked = !heroCard.liked
    setHeroState([...heroState]);
  } 
    
  }

  const [hide, setHide] = useState<Boolean>(false)

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
          <HeroList isLikeList={false} likeFunction={changeLikedStatus} displayList={heroState.filter(card => !card.liked)}  className='unliked-hero-cardlist' />
        </>}
      </div>

    </div>
  );
}

export default App;
