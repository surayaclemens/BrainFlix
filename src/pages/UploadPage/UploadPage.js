import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './UploadPage.scss';
import UploadIcon from '../../assets/images/upload.svg';
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg"


function UploadPage() {

    return (
        <section className='upload'>
            <h1 className='upload__header'>Upload video</h1>
            {/* video thumbnail section */}
            <h2 className='upload__subheader'>Video thumbnail</h2>
            <img className='upload__thumbnail' src={VideoThumbnail} alt='video thumbnail'></img>
            {/* start of the form */}
            <form className='upload__form'>
                <h2 className='upload__subheader-form'>Title your video</h2>
                <input className='upload__title-input' name="title-input" type="text" id='title-input' placeholder='Add a title to your video'></input>
                <h2 className='upload__subheader-form'>Add a video description</h2>
                <textarea className="upload__description-input" name="description-input" type="text" id="description-input" placeholder="Add a description to your video"></textarea>
                <button className="upload__button">Publish</button>
                <button className="upload__button-cancel">Cancel</button>
            </form>


        </section>
    )
}

export default UploadPage;

                        