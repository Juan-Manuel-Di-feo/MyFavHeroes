import './liked-list.styles.css'
import HeroList from "../hero-list/hero-list.component";
import { ILikelistManager } from '../../interfaces/interfaces';
import '../../assets/arrow/arrow-up.svg'
import { url } from 'inspector';


const LikedList = (props: ILikelistManager) => {

    const padding = props.appConfig.cardWidth / 25

    const colCount = () => {
        if (props.appConfig.columnCount === 1) {
            return 1.1
        }
        if (props.appConfig.columnCount === 2) {
            return 2.2
        }
        if (props.appConfig.columnCount === 3) {
            return 4.5
        }
        return 4.5
    }

    return (
        <div className='like-lst'>

            <div
                className={`${props.hide && 'hidden-list'} liked-hero-list`}
                style={{ width: (props.appConfig.cardWidth * colCount() + (padding * 2)), padding: padding }}>
                <div className='liked-text'>
                    <div className='liked-logo'>
                        <div className='liked-logo-hearth'/>
                    </div>
                    <h2 className='text'>Liked</h2>
                </div>
                {props.displayList.length === 0 ?
                <div className='empty-wrapper'>
                    <div className='big-empty-hearth'/>
                    <span className='empty-text'>You haven’t liked any superhero yet</span>
                </div>
                :    
                <div className={`${props.hide && 'hidden'}`}>
                    <HeroList 
                    likeCheck={props.likeCheck} 
                    likeFunction={props.likeFunction} 
                    displayList={props.displayList} 
                    appConfig={props.appConfig} 
                    lastLikedId={props.lastLikedId}
                    />
                </div>}

                <button className={` ${props.displayList.length?'':'disabled'} hide-button`} onClick={() => props.setHide(!props.hide)} disabled={props.displayList.length? false:true}>
                    <div className={`${props.hide ? 'hid' : ''} arrow`} ></div>
                </button>
            </div>
        </div>
    )
}

export default LikedList;


