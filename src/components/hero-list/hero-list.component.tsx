import { heroSpec, IHeroManager } from "../../interfaces/interfaces";
import HeroCard from "../hero-card/hero-card.component";
import { IHideManager } from "../../interfaces/interfaces";

const HeroList = (props: IHeroManager, secondProps: IHideManager) => {
    
    return (
        <div className={props.isLikeList ? 'like-list' : 'hero-list'}>
            {props.displayList.map(hero => {
                    return <HeroCard key={hero.id} {...hero} onLiked={props.likeFunction}/>
                })}
        </div>
    )

}

export default HeroList;