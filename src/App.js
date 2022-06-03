import { BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import './App.scss'
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
// import Hero from './components/Hero/Hero';

const apiKey="?api_key=cdff3da8-3977-4bd0-85aa-9be24d0a1367";


class App extends React.Component {

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/"  exact component={HomePage} />
            <Route path="/video/:videoID" component={HomePage} />
            <Route path="/upload" component={UploadPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;














// OLD APP.JS FILE BEFORE SWITCHING IT TO HOMEPAGE

// // GLOBAL STUFF
// import React from 'react';
// import './App.scss';
// // import { BrowserRouter, Switch, Route } from 'react-router-dom';

// // // PAGES
// // import HomePage from './pages/HomePage';
// // import UploadPage from './pages/UploadPage';

// // COMPONENTS
// import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';
// import HeroInfo from './components/HeroInfo/HeroInfo';
// import Comments from './components/Comments/Comments';
// import NextVideos from './components/NextVideos/NextVideos';

// // DATA
// import videoDetails from './data/video-details.json';
// import videoList from './data/videos.json';

// class App extends React.Component {

// // STATE - has access to videoDetails full array, the first object for default, nextVideo array
//   state = {
//     videoDetails,
//     currentVideo: videoDetails[0],
//     nextVideos: videoList
//   }

// // HANDLER TO CHANGE VIDEO ON CLICK
// handleChangeVideo = (id) => {
//   let heroVideo = this.state.videoDetails.find(video  => video.id === id) 
//   this.setState ({
//     currentVideo: heroVideo
//   })
// }

// // RENDERING ALL COMPONENTS ONTO PAGE
//   render(){
//   return (
//     <div className="App">
//      <Header />
//      <Hero 
//      currentVideo={this.state.currentVideo}
//      />
//      <div className='container'>
//        <div className='second-container'>
//      <HeroInfo 
//      currentVideo={this.state.currentVideo}
//      />
//      <Comments 
//      currentVideo={this.state.currentVideo}
//      />
//       </div>
//      <NextVideos 
//      nextVideos={this.state.nextVideos.filter(video => video.id !== this.state.currentVideo.id)}
//      changeVideo={this.handleChangeVideo}
//      />
//      </div>

//     </div>
//   )
// }
// }

// export default App;