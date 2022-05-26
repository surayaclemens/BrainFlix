import './HeroVideo.scss'
function HeroVideo(props) {
// write function stuff in here

// in the return is where your jsx/html type stuff goes
    return (
        <section className='hero'>
            <video className='hero__video'></video>
            <h1 className='hero__title'>BMX Rampage: 2021 Highlights</h1>
            <div className='hero__metadata'>
                    <div className='metadata'>
                        <h3 className='metadata__user'>***dynamically fill with user***</h3>
                        <p className='metadata__date'>***dynamically fill with date***</p>
                    </div>
                    <div className='metadata__counters'>
                        <img className='metadata__counters-icon' src='' alt='views icon'/>
                        <p className=''>***dynamically fill with view counter??***</p>
                        <img className='metadata__counters-icon' src='' alt='likes icon'/>
                        <p className=''>***dynamically fill with like counter??***</p>
                    </div>
            </div>
            <p className='hero__video-description'>
                ***dynamically fill with each description??***
            </p>
            <p className='hero__comments-posted'>3 Comments</p>
        </section>
    )
}

export default Hero;