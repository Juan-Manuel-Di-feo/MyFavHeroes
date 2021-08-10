import React, { useState } from "react"
import { heroSpec } from "../../interfaces/interfaces"
import './hero-card.styles.css'
import Loading from "../content-loader/content-loader.component"

const HeroCard = (hero: heroSpec) => {
    const [doneLoading, setDoneLoading] = useState<boolean>(false)

    const imgLoad = (success: boolean) => {
        if (success) {
            setDoneLoading(true)
            
        }
        return
    }

    const powerCalculator = (hero: heroSpec) => {
        const stats = hero.powerstats;
        const power = (stats.speed + stats.durability + stats.intelligence + ((stats.strength + stats.power) * (stats.combat / 100))) / 50
        return (
            Math.round(power * 100) / 100.
        )
    }
    console.log(hero.onLiked)
    return (
        <div className='hero-card'>

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
                    {doneLoading ?
                        (<div className="loader-wrapper">
                            <Loading />
                            <script>{async () => {
                                const success: boolean = Boolean(await fetch(hero.images.sm));
                                imgLoad(success)
                            }}
                            </script>
                        </div>)
                        :
                        (<img className='image' alt="hero" src={hero.images.sm} />)}

                </div>
                <button onClick={() => hero.onLiked(hero.id)} className='like-button'></button>
            </div>
        </div>
    )
}

export default HeroCard;