// GLOBAL STUFF
import React from 'react';
import './App.scss';

// COMPONENTS
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Comments from './components/Comments/Comments';
import NextVideos from './components/NextVideos/NextVideos';

// DATA
import videoDetails from './data/video-details.json';
import videoList from './data/videos.json';


class App extends React.Component {

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


  render(){
  return (
    <div className="App">
     <Header />


     <Hero 
     currentVideo={this.state.currentVideo}
     />

     <Comments 
     currentVideo={this.state.currentVideo}
     />

     <NextVideos 
     nextVideos={this.state.nextVideos.filter(video => video.id !== this.state.currentVideo.id)}
     changeVideo={this.handleChangeVideo}
     />

    </div>
  )
}
}

export default App;
