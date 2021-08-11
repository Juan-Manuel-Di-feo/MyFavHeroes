import './liked-list.styles.css'
import HeroList from "../hero-list/hero-list.component";
import { ILikelistManager } from '../../interfaces/interfaces';


const LikedList = (props: ILikelistManager) => {


    return (
        <div className="like-list-wrapper">
            <button className='hide-button' onClick={() => props.setHide(!props.hide)}>{props.hide ? '+' : '-'}</button>
            <div className={`${props.hide ? 'hidden' : ''}`}>
                <HeroList isLikeList={true} likeFunction={props.likeFunction} displayList={props.displayList} className='liked-hero-list' />
            </div>
        </div>
    )
}

export default LikedList;