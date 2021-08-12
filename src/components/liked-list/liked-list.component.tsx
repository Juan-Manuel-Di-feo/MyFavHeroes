import './liked-list.styles.css'
import HeroList from "../hero-list/hero-list.component";
import { ILikelistManager } from '../../interfaces/interfaces';


const LikedList = (props: ILikelistManager) => {


    return (
        <>
            <button className='hide-button' onClick={() => props.setHide(!props.hide)}>{props.hide ? '+' : '-'}</button>
            <div className={`${props.hide && 'hidden-list'} liked-hero-list`}>

                <div className={`${props.hide && 'hidden'}`}>
                    <HeroList likeCheck={props.likeCheck} likeFunction={props.likeFunction} displayList={props.displayList} />
                </div>
            </div>
        </>
    )
}

export default LikedList;


