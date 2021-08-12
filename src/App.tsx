//@ts-nocheck
import { useEffect, useState } from 'react';
import './App.css';
import { heroSpec, IConfig } from './interfaces/interfaces';
import useHeroService from './components/service-loader/service-loader';
import Loading from './components/content-loader/content-loader.component';
import LikedList from './components/liked-list/liked-list.component';
import GridList from './components/grid-list/grid-list.component';
import useWidthDetector from './components/responsive-manager/responsive-manager';

const App = () => {
 
  const [heroState, setHeroState] = useState<heroSpec[]>([]);
  const [herosLiked, setHerosLiked] = useState<heroSpec[]>([]);

  const [heroToSearch, setHeroTosearch] = useState<string>('');
  const [hide, setHide] = useState<Boolean>(false)

  const [appConfig, setAppConfig] = useState<IConfig | {}>({})

  const service = useHeroService();
  const widthParam = useWidthDetector();

  useEffect(() => {
    if (service.status === 'loaded') {
      setHeroState(service.payload)
    }
    
  }, [service.status])



  const changeLikedStatus = (cardId: Number) => {
    const card = heroState.find(hero => hero.id === cardId);
    if (card) {
      const newHeroState = heroState.filter(hero => hero.id !== cardId);
      herosLiked.push(card)
      const newLikedHeros = [...herosLiked];
      setHeroState(newHeroState);
      setHerosLiked(newLikedHeros);
    } else {
      const likedCard = herosLiked.find(hero => hero.id === cardId);
      const newLikedHeros = herosLiked.filter(hero => hero.id !== cardId);
      heroState.splice(likedCard.id-1,0,likedCard); 
      const newHeroState = [...heroState]
      setHeroState(newHeroState);
      setHerosLiked(newLikedHeros);
    }
  }
  const setText = (event: Event) => {
    setHeroTosearch(event.target.value)
  }

  const isLiked = () => {
    if(herosLiked.find(hero=>hero.id === cardId)){
      return true
    }
    return false
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
            likeCheck = {isLiked}
            likeFunction={changeLikedStatus} 
            displayList={herosLiked}  
            className='liked-hero-cardlist'
            hide={hide}
            setHide={setHide}
             /> 
             <input type="search" onChange={setText} placeholder="Type here to search..." className='search-bar'/>
            <GridList  
            appConfig = {widthParam}
            likeCheck = {isLiked}
            heroState={heroState}
            likeFunction={changeLikedStatus} 
            displayList={heroState.filter(hero=>hero.name.toLowerCase().includes(heroToSearch.toLowerCase())||hero.biography.fullName.toLowerCase().includes(heroToSearch.toLowerCase()))}  
            className='unliked-hero-cardlist' />
          </>}
        </div>
  
      </div>
    );


}

export default App;
