import React from 'react';
import './HeroInfo.scss'
import EyeIcon from "../../assets/images/views.svg";
import LikeIcon from "../../assets/images/likes.svg";


function HeroInfo({currentVideo}) {

    let unixTime = currentVideo.timestamp
    let videoDate = (parseInt(unixTime));
    let formattedDate = new Date(videoDate).toLocaleDateString();

    return (
        <>
            <h1 className='hero__title'>{currentVideo.title}</h1>
            <div className='hero__metadata'>
                    <div className='metadata'>
                        <h3 className='metadata__user'>By {currentVideo.channel}</h3>
                        <p className='metadata__date'>{formattedDate}</p>
                    </div>
                    <div className='metadata__counters'>
                        <div className='metadata__counters-box'>
                            <img className='metadata__counters-icon' src={EyeIcon} alt='views icon'/>
                            <p className='metadata__body'>{currentVideo.views}</p>
                        </div>
                        <div className='metadata__counters-box'>
                            <img className='metadata__counters-icon' src={LikeIcon} alt='likes icon'/>
                            <p className='metadata__body'>{currentVideo.likes}</p>
                        </div>
                    </div>
            </div>
            <p className='hero__video-description'>{currentVideo.description}</p>
            <p className='hero__comments-posted'>{currentVideo.comments.length} Comments</p>
        </>
    )
}

export default HeroInfo;