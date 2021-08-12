import './liked-list.styles.css'
import HeroList from "../hero-list/hero-list.component";
import { ILikelistManager } from '../../interfaces/interfaces';


const LikedList = (props: ILikelistManager) => {

    const padding = props.appConfig.cardWidth / 25
    
    const colCount = () =>{
        if(props.appConfig.columnCount === 1){
            return 1.1
        }
        if(props.appConfig.columnCount === 4){
            return 4.5
        }
        return 2.2
    }
    
    return (
        <>
            <button className='hide-button' onClick={() => props.setHide(!props.hide)}>{props.hide ? '+' : '-'}</button>
            <div 
            className={`${props.hide && 'hidden-list'} liked-hero-list`} 
            style={{width:(props.appConfig.cardWidth * colCount() + (padding*2)), padding: padding}}>

                <div className={`${props.hide && 'hidden'}`}>
                    <HeroList likeCheck={props.likeCheck} likeFunction={props.likeFunction} displayList={props.displayList} appConfig={props.appConfig}/>
                </div>
            </div>
        </>
    )
}

export default LikedList;


