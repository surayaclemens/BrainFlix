import React from 'react';
import './UploadPage.scss';
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg"
import {Link} from 'react-router-dom';
import axios from 'axios';

class UploadPage extends React.Component {

    componentDidMount(){
        document.title="BrainFlix - Upload"
    }

    // setting initial state of title and description to empty, button not clicked yet
    state = {
        title: "",
        description: "",
        buttonClicked: false
    };

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
        buttonClicked: true
    })
  }

  //INPUT HANDLER
  handleInput = (ev) => {
    this.setState({
        [ev.target.name]: ev.target.value,
    })
  }
    render(){
        if (this.state.buttonClicked){
            return (
                <div className='upload__modal'>
                    <h1 className='upload__modal-title'>Video upload successful!</h1>
                    <Link className="upload__modal-link" to="/">Home</Link>
                    <Link className="upload__modal-link" to="/upload">Back to upload</Link>
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
                                <button className="buttons__cancel">
                                    <Link className="buttons__cancel-link" to="/">Cancel</Link>
                                </button>
                        </div>
                    </form>
                    
                </div>
            </section>
        )
    }
}

export default UploadPage;