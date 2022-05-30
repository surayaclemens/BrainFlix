import React from 'react';
import './Hero.scss'


function Hero({currentVideo}) {

    return (
        <section className='hero'>
            <div className='hero__background'>
                <video className='hero__video' controls poster={currentVideo.image}>
                </video>
            </div>
        </section>
    )
}

export default Hero;