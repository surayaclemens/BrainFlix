// GLOBAL STUFF
import React from 'react';
import "./HomePage.scss";

// COMPONENTS
import Hero from "../../components/Hero/Hero"
import HeroInfo from '../../components/HeroInfo/HeroInfo';
import Comments from '../../components/Comments/Comments';
import NextVideos from '../../components/NextVideos/NextVideos';

// DATA
import videoDetails from '../../data/video-details.json';
import videoList from '../../data/videos.json';

class HomePage extends React.Component {

// STATE - has access to videoDetails full array, the first object for default, nextVideo array
  state = {
    videoDetails,
    currentVideo: videoDetails[0],
    nextVideos: videoList
  }

// HANDLER TO CHANGE VIDEO ON CLICK
handleChangeVideo = (id) => {
  let heroVideo = this.state.videoDetails.find(video  => video.id === id) 
  this.setState ({
    currentVideo: heroVideo
  })
}

// RENDERING ALL COMPONENTS ONTO PAGE
  render(){
  return (
    <div className="App">
    
     <Hero 
     currentVideo={this.state.currentVideo}
     />
     <div className='container'>
       <div className='second-container'>
     <HeroInfo 
     currentVideo={this.state.currentVideo}
     />
     <Comments 
     currentVideo={this.state.currentVideo}
     />
      </div>
     <NextVideos 
     nextVideos={this.state.nextVideos.filter(video => video.id !== this.state.currentVideo.id)}
     changeVideo={this.handleChangeVideo}
     />
     </div>

    </div>
  )
}
}

export default HomePage;