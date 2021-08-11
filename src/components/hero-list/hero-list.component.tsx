// @ts-nocheck
import { IHeroManager } from "../../interfaces/interfaces";
import HeroCard from "../hero-card/hero-card.component";


const HeroList = (props: IHeroManager) => {
    
    return (
        <div className={props.isLikeList ? 'like-list' : 'hero-list'}>
            {props.displayList.map(hero => {
                    return <HeroCard key={hero.id} {...hero} onLiked={props.likeFunction}/>
                })}
        </div>
    )

}

export default HeroList;