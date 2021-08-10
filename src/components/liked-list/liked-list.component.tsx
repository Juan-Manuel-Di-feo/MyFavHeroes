import './liked-list.styles.css'
import HeroList from "../hero-list/hero-list.component";
import { IHeroManager } from '../../interfaces/interfaces';


const LikedList = (props: IHeroManager) => {
    
    return (
        <div className="like-list-wrapper">
            <button className='hide-button'/>
            <HeroList isLikeList={props.isLikeList} likeFunction={props.likeFunction} displayList={props.displayList} />
        </div>
    )
}

export default LikedList;