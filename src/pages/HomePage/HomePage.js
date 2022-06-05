// GLOBAL
import React from 'react';
import "./HomePage.scss";
// COMPONENTS
import Hero from "../../components/Hero/Hero"
import HeroInfo from '../../components/HeroInfo/HeroInfo';
import Comments from '../../components/Comments/Comments';
import NextVideos from '../../components/NextVideos/NextVideos';
// DATA
import axios from "axios";
const videosURL = "https://project-2-api.herokuapp.com/videos/";
const apiKey = "?api_key=cdff3da8-3977-4bd0-85aa-9be24d0a1367";

// START OF CLASS COMPONENT FOR HOME
class HomePage extends React.Component {

// inside initial state, both the hero video and next videos list need to start empty so we can push the API data into them once get runs
    state = {
    currentVideo: {},
    nextVideos: [],
    };

// MOUNTING INITIAL VIDEO
componentDidMount() {
// fetching the data for videos list, set state to have the next videos list be filled with the array received from the data get
// have to do this first so we have all video data, in order to get and use just the first one for currentVideo
    axios.get(videosURL+apiKey)
        .then(response => {
        this.setState({
              nextVideos: response.data
            })

  // store the first video (targeted by ID) in a variable so it can be used for default video
    const defaultVideo = response.data[0].id;

  // now getting the id of the 1st video (which we called defaultVideo above) and setting that url & video as the current one
      axios.get(videosURL+defaultVideo+apiKey)
        .then(response => {
        this.setState({
              currentVideo: response.data
          })
        })
    })
}

// UPDATE TO NEW VID
componentDidUpdate() {
  const clickedVideoID = this.props.match.params.videoID;

  if (this.props.match.path==="/" && this.state.currentVideo.id !== this.state.nextVideos[0].id) {
    axios.get(videosURL+this.state.nextVideos[0].id+apiKey)
        .then(response => {
          this.setState({
            currentVideo: response.data
          })
        })
        .catch(error => console.error(error))
      }
  else if (this.state.currentVideo.id !== clickedVideoID) {
      axios.get(videosURL+clickedVideoID+apiKey)
        .then(response => {
          // console.log(response)
          this.setState({
            currentVideo: response.data
          })
        })
        .catch(error => console.error(error))
      }
    
}


// RENDERING ALL COMPONENTS ONTO PAGE
  render(){
    return (
      <div className="App">
        <Hero currentVideo={this.state.currentVideo} />
        <div className='container'>
            <div className='second-container'>
              <HeroInfo currentVideo={this.state.currentVideo} />
              <Comments currentVideo={this.state.currentVideo} />
            </div>
            <NextVideos nextVideos={this.state.nextVideos.filter(video => video.id !== this.state.currentVideo.id)} />
        </div>
      </div>
    )
  }
}

export default HomePage;


