// GLOBAL STUFF
import React from 'react';
import "./HomePage.scss";

// COMPONENTS
import Hero from "../../components/Hero/Hero"
import HeroInfo from '../../components/HeroInfo/HeroInfo';
import Comments from '../../components/Comments/Comments';
import NextVideos from '../../components/NextVideos/NextVideos';

// DATA
import axios from "axios";
// make variables for API URL and key, to make them easy to use in functions
const videosURL = "https://project-2-api.herokuapp.com/videos/";
const apiKey = "?api_key=cdff3da8-3977-4bd0-85aa-9be24d0a1367";

class HomePage extends React.Component {

// STATE FOR AXIOS
// inside initial state, both the hero video and next videos list need to be empty so we can push the API data into them once got
// for some reason only works as empty object, not null??
    state = {
    currentVideo: {},
    nextVideos: [],
  }

// LIFECYCLE AND AXIOS
// using mount because want it to show up like this initially
componentDidMount() {
// fetching the data for the next videos list, adding apiKey to end of URL so we have access to it
// then set the state to have the next videos array be filled with the array received from the data 
// have to do this first so we have all video data, then can use just the first one for currentVideo
  axios.get(videosURL+apiKey)
      .then(response => {
      this.setState({
            nextVideos: response.data
          })
// store the first video (targeted by ID) in a variable so it can be used for default
  const defaultVideo = response.data[0].id;
// now getting data from URL again...but this time visiting specific ID of first video to be default in player
// then set the state of the current video to that one
  axios.get(videosURL+defaultVideo+apiKey)
    .then(response => {
    this.setState({
          currentVideo: response.data
      })
    })
  })
}

// HANDLER TO CHANGE VIDEO ON CLICK - needs to be reworked to dynamic route
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