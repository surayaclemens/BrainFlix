import React from 'react';
import './Hero.scss'
import EyeIcon from "../../assets/images/views.svg";
import LikeIcon from "../../assets/images/likes.svg";


function Hero({currentVideo}) {
// write function stuff in here

// in the return is where your jsx/html type stuff goes
    return (
        <section className='hero'>
            <video className='hero__video' poster={currentVideo.image}>
            </video>
            <h1 className='hero__title'>{currentVideo.title}</h1>
            <div className='hero__metadata'>
                    <div className='metadata'>
                        <h3 className='metadata__user'>{currentVideo.channel}</h3>
                        <p className='metadata__date'>{currentVideo.timestamp}</p>
                    </div>
                    <div className='metadata__counters'>
                        <img className='metadata__counters-icon' src={EyeIcon} alt='views icon'/>
                        <p className=''>{currentVideo.views}</p>
                        <img className='metadata__counters-icon' src={LikeIcon} alt='likes icon'/>
                        <p className=''>{currentVideo.likes}</p>
                    </div>
            </div>
            <p className='hero__video-description'>{currentVideo.description}</p>
            <p className='hero__comments-posted'>3 Comments</p>
        </section>
    )
}

export default Hero;