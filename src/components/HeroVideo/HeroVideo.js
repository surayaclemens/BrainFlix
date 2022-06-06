import React from 'react';
import './HeroVideo.scss'


function HeroVideo(props) {

    return (
        <section className='hero'>
            <div className='hero__background'>
                <video className='hero__video' controls poster={props.currentVideo.image}>
                </video>
            </div>
        </section>
    )
}

export default HeroVideo;