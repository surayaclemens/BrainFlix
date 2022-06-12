import React from 'react';
import './UploadPage.scss';
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg"
import {Link} from 'react-router-dom';
import axios from 'axios';

let videosURL = 'http://localhost:8080/videos';

class UploadPage extends React.Component {

    state = {
        title: "",
        description: "",
    };

//   document.title="BrainFlix - Upload"
    
// PUBLISH HANDLER
  handlePublish = (event) => {
    event.preventDefault()
  
    axios.post(videosURL, {
        title: this.state.title,
        description: this.state.description
    })
    .catch(error => console.error(error))
  }

  //INPUT HANDLER
  handleInput = (ev) => {
    this.setState({
        [ev.target.name]: ev.target.value,
    })
    if (this.state.title && this.state.description) {
        return alert("Upload successful!");
    }
  }
    render(){
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
                                className="buttons__publish"><Link to={"/"} className='publish__link'>Publish</Link></button>
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