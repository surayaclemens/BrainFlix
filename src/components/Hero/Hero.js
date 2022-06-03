import React from 'react';
import './Hero.scss'


function Hero(props) {

    return (
        <section className='hero'>
            <div className='hero__background'>
                <video className='hero__video' controls poster={props.currentVideo.image}>
                </video>
            </div>
        </section>
    )
}

export default Hero;