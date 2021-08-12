import { IHeroManager } from "../../interfaces/interfaces";
import HeroCard from "../hero-card/hero-card.component";
import './hero-list.styles.css'


const HeroList = (props: IHeroManager) => {

    const listWidth = window.innerWidth - ((window.innerWidth/100)*10)

    return (
        <div className='liked-cards'
            style={{
                width: listWidth
        }}>
            {props.displayList.map(hero => {
                return <HeroCard key={hero.id} {...hero} onLiked={props.likeFunction} likeChecker={props.likeCheck} cardWidth={props.appConfig.cardWidth}/>
            })}
        </div>
    )

}

export default HeroList;