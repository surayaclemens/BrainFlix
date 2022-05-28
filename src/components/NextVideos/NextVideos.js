import React from 'react';
import './NextVideos.scss';

function NextVideos({nextVideos}) {
// write function stuff in here

// in the return is where your jsx/html type stuff goes
    return (
        <section className='videos'>
            <h2 className='videos__header'>Next Videos</h2>
            <ul className='videos__list'>
            {nextVideos.map(video => {
                            return (
                                // something must be missing with my key
                                <li className='single-video' key={video.id}>
                                    <img className='single-video__thumbnail' src={nextVideos.image} alt='video thumbnail'/>
                                    <div className='single-video__thumb-text'>
                                        <p className='single-video__title'>{nextVideos.title}</p>
                                        <p className='single-video__creator'>{nextVideos.channel}</p>
                                    </div>                      
                                </li> 
                            )
                        })}               
            </ul>
        </section>
    )
}


export default NextVideos;


// before I tried to script it
// return (
//     <section className='videos'>
//         <h2 className='videos__header'>Next Videos</h2>
//         <ul className='videos__list'>
//             <li className='single-video'>
//                 <img className='single-video__thumbnail' src={nextVideos[1].image} alt='video thumbnail'/>
//                 <div className='single-video__thumb-text'>
//                     <p className='single-video__title'>{nextVideos[1].title}</p>
//                     <p className='single-video__creator'>{nextVideos[1].channel}</p>
//                 </div>
                   
//             </li>
//         </ul>
//     </section>
// )
// 


                        