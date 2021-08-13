//@ts-nocheck
import { useEffect, useState } from 'react';
import './App.css';
import { heroSpec } from './interfaces/interfaces';
import useHeroService from './components/service-loader/service-loader';
import Loading from './components/content-loader/content-loader.component';
import LikedList from './components/liked-list/liked-list.component';
import GridList from './components/grid-list/grid-list.component';
import useDimensionSet from './components/responsive-manager/responsive-manager';

const App = () => {

  const [heroState, setHeroState] = useState<heroSpec[]>([]);
  const [herosLiked, setHerosLiked] = useState<heroSpec[]>([]);

  const [heroToSearch, setHeroTosearch] = useState<string>('');
  const [hide, setHide] = useState<Boolean>(false)

  const service = useHeroService();

  const widthParam = useDimensionSet();

  useEffect(() => {
    if (service.status === 'loaded') {
      if (localStorage.getItem("likedHeroes")) {
        setHerosLiked(JSON.parse(localStorage.getItem("likedHeroes")))
        setHeroState(JSON.parse(localStorage.getItem("unlikedHeroes")))
      }
      else {
        setHeroState(service.payload)
      }
    }

  }, [service.status])



  const changeLikedStatus = (cardId: Number) => {
    const card = heroState.find(hero => hero.id === cardId);
    if (card) {
      const newHeroState = heroState.filter(hero => hero.id !== cardId);
      herosLiked.push(card)
      const newLikedHeros = [...herosLiked];
      localStorage.setItem("likedHeroes", JSON.stringify(newLikedHeros));
      localStorage.setItem("unlikedHeroes", JSON.stringify(newHeroState));
      setHeroState(newHeroState);
      setHerosLiked(newLikedHeros);
    } else {
      const likedCard = herosLiked.find(hero => hero.id === cardId);
      const newLikedHeros = herosLiked.filter(hero => hero.id !== cardId);
      likedCard &&
        heroState.splice(likedCard.id - 1, 0, likedCard);
      const newHeroState = [...heroState]
      localStorage.setItem("likedHeroes", JSON.stringify(newLikedHeros));
      localStorage.setItem("unlikedHeroes", JSON.stringify(newHeroState));
      setHeroState(newHeroState);
      setHerosLiked(newLikedHeros);
    }
  }
  const setText = (e: Event | any) => {
    setHeroTosearch(e.target.value)
  }

  const isLiked = (cardId: number) => {
    if (herosLiked.find(hero => hero.id === cardId)) {
      return true
    }
    return false
  }

  return (
    <div className="App">

      <div className="logo" />

      <div className='list-wrapper'>
        {service.status === 'loading' &&
          <Loading />}

        {service.status === 'loaded' &&
          <>
            <LikedList
              appConfig={widthParam}
              likeCheck={isLiked}
              likeFunction={changeLikedStatus}
              displayList={herosLiked}
              className='liked-hero-cardlist'
              hide={hide}
              setHide={setHide}
            />

            <div className='sb-wrapper' style={{marginLeft: widthParam.searchBarSpace}}>
              <div className='search-logo' />
              <input type="search" onChange={setText} placeholder="Search" className='search-bar' style={{}} />
            </div>

            <GridList
              appConfig={widthParam}
              likeCheck={isLiked}
              heroState={heroState}
              likeFunction={changeLikedStatus}
              displayList={heroState.filter(hero => hero.name.toLowerCase().includes(heroToSearch.toLowerCase()) || hero.biography.fullName.toLowerCase().includes(heroToSearch.toLowerCase()))}
              className='unliked-hero-cardlist' />
          </>}
      </div>

    </div>
  );


}

export default App;
