import React from 'react';
import './NextVideos.scss';
// import NextVideos from './components/NextVideos/NextVideos';

function NextVideos({nextVideos, changeVideo}) {

    return (
        <section className='videos'>
            <h2 className='videos__header'>Next Videos</h2>
            <ul className='videos__list'>
            {nextVideos.map((video) => {
                            return (
                                <div
                                className='single-video' 
                                key={video.id}
                                onClick={() => {changeVideo(video.id)}}
                                >
                
                                    <img className='single-video__thumbnail' src={video.image} alt='video thumbnail'/>
                                    <div className='single-video__thumb-text'>
                                        <p className='single-video__title'>{video.title}</p>
                                        <p className='single-video__creator'>{video.channel}</p>
                                    </div>                      
                                </div> 
                            )
                        })}               
            </ul>
        </section>
    )
}

export default NextVideos;

                        