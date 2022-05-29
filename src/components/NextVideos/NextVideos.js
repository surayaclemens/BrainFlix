import React from 'react';
import './NextVideos.scss';
// import NextVideos from './components/NextVideos/NextVideos';

function NextVideos({nextVideos, changeVideo}) {

    return (
        <section className='videos'>
            <h2 className='videos__header'>Next Videos</h2>
            <ul className='videos__list'>
            {nextVideos.map((video,i) => {
                            return (
                                <li 
                                className='single-video' 
                                key={video.id}
                                onClick={() => changeVideo(video.id)}
                                >
                
                                    <img className='single-video__thumbnail' src={nextVideos[i].image} alt='video thumbnail'/>
                                    <div className='single-video__thumb-text'>
                                        <p className='single-video__title'>{nextVideos[i].title}</p>
                                        <p className='single-video__creator'>{nextVideos[i].channel}</p>
                                    </div>                      
                                </li> 
                            )
                        })}               
            </ul>
        </section>
    )
}

export default NextVideos;

                        