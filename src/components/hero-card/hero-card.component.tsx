//@ts-nocheck
import { isPropertySignature } from "typescript";
import { heroSpec } from "../../interfaces/interfaces"
import './hero-card.styles.css'


const HeroCard = (hero: heroSpec) => {

    const powerCalculator = (hero: heroSpec) => {
        const stats = hero.powerstats;
        const power = (stats.speed + stats.durability + stats.intelligence + ((stats.strength + stats.power) * (stats.combat / 100))) / 50
        return (
            Math.round(power * 100) / 100.
        )
    }


    return (
        <div className='hero-card' style={{ backgroundImage: `url(${hero.images.md})`, width: hero.cardWidth }}>


            <div className='content' >
                <div className='frame-1'>
                    <div className="frame-10">
                        <h1 className='hero-name'>{hero.name}</h1>
                        <span className='real-full-name'>Real name: {hero.biography.fullName}</span>
                        <div className="frame-12">
                            <span className='power-score'>{powerCalculator(hero)}</span>
                        </div>
                    </div>
                </div>
                <div className='group-296'>
                    <img className='image' alt="hero" src={hero.images.sm} />
                </div>
                <button onClick={() => hero.onLiked(hero.id)} className='like-button'>
                    <div className={hero.likeChecker ? 'liked' : 'unliked'} />
                </button>


            </div>
            {hero.id === hero.lastLikedId &&
                    <div className="recently-liked-sign" style={{ width: (hero.cardWidth / 100) * 40 }}>
                        <span className='recently-liked-text'>Liked recently</span>
                    </div>}
        </div>
    )
}

export default HeroCard;