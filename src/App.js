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
    currentVideo: videoDetails[0],
    nextVideos: videoList
  }

  // handleChangeVideo = (id) => {
  //   this.setState({
  //       currentVideo: id
  //   })
  // }

  render(){
  return (
    <div className="App">
     <Header />
     <Hero currentVideo={this.state.currentVideo}/>
     <Comments />
     <NextVideos nextVideos={this.state.nextVideos}/>
    </div>
  );
}
}

export default App;
