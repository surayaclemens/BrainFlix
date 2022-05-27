import React from 'react';
import './VideoList.scss';

function VideoList() {
// write function stuff in here

// in the return is where your jsx/html type stuff goes
    return (
        <section className='videos'>
            <h2 className='videos__section-title'>Next Videos</h2>
            <div className='videos__item'>
                <img className='video__thumbnail' src='' alt='video thumbnail'/>
                <div className='video__thumb-text'>
                    <p className='video__title'>***fill with video name</p>
                    <p className='video__creator'>***fill with creator name</p>
                </div>
            </div>
        </section>
    )
}

export default VideoList;
