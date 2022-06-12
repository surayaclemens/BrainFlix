import React from 'react';
import './UploadPage.scss';
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg"
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


// videosURL = 'http://localhost:8000/videos';

class UploadPage extends React.Component {

    state = {
        title: "",
        description: "",
        clickedOn: false
    };

//   document.title="BrainFlix - Upload"
// PUBLISH HANDLER
  handlePublish = (event) => {
    event.preventDefault()

    axios.post('http://localhost:8000/videos', {
        title: this.state.title,
        description: this.state.description
    })
    .then(res => console.log(res))
    .catch(error => console.error(error))
    this.setState({
        clickedOn: true
    })

  }

  //INPUT HANDLER
  handleInput = (ev) => {
    this.setState({
        [ev.target.name]: ev.target.value,
    })
 
  }
    render(){
        if (this.state.clickedOn){
            return (
                <div className='upload__modal'>
                    <h1 className='upload__modal-title'>Video upload successful</h1>
                    <Link className="namethis" to="/">Home</Link>
                    <Link className="namethis" to="/upload">Go back</Link>
                </div>
            )
        }
        return (
            <section className='upload'>
                <h1 className='upload__header'>Upload video</h1>
                <h2 className='upload__subheader'>Video thumbnail</h2>
                <div className='upload__container'>
                    <img className='upload__thumbnail' src={VideoThumbnail} alt='video thumbnail'></img>
                    <form onSubmit={this.handlePublish}
                        className='upload__form'>
                        <h2 className='upload__subheader-form'>Title your video</h2>
                        <input 
                        onChange={this.handleInput}
                        className='upload__title-input' 
                        name="title" 
                        type="text" 
                        placeholder='Add a title to your video'
                        ></input>
                        <h2 className='upload__subheader-form'>Add a video description</h2>
                        <textarea 
                        onChange={this.handleInput}
                        className="upload__description-input" 
                        name="description" 
                        type="text" 
                        placeholder="Add a description to your video">
                        </textarea>
                        <div className='buttons'>
                                <button 
                                type="submit"
                                className="buttons__publish">Publish</button>
                            <button className="buttons__cancel">Cancel</button>
                        </div>
                    </form>
                </div>
                <hr className='upload__line'></hr>    
            </section>
        )
    }
}

export default UploadPage;