import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Comments from './components/Comments/Comments';
import VideoList from './components/VideoList/VideoList';
import videoDetails from './data/video-details.json';


class App extends React.Component {

  state = {
    currentVideo: videoDetails[0].id,
    nextVideos: videoDetails
  }

  handleChangeVideo = (id) => {
    this.setState({
        currentVideo: id
    })
  }

  render(){
  return (
    <div className="App">
     <Header />
     <Hero />
     <Comments />
     <VideoList />
    </div>
  );
}
}

export default App;
