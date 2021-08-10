import React from "react"
import { heroSpec } from "../../interfaces/interfaces"
import './hero-card.styles.css'

const HeroCard = (hero: heroSpec) => {

    const powerCalculator = (hero: heroSpec) => {
        const stats = hero.powerstats;
        return (
            stats.speed * stats.durability + (stats.strength + stats.intelligence + stats.power) * stats.combat
        )
    }

    return (
        <div className='hero-card'>
            <button className='like-button'></button>
            <div className='content'>
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
            </div>
        </div>
    )
}

export default HeroCard;