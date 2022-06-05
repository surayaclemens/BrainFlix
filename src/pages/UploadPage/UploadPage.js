import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './UploadPage.scss';
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg"


function UploadPage() {

  const handlePublish = (event) => {
      event.preventDefault()
      const form = event.target
      const title = form.title.value
      const description = form.description.value
      
      if (!title || !description) return alert("Please fill out all fields")
      if (title && description) return alert("Upload successful!")   
  }

    return (
        <section className='upload'>
            <h1 className='upload__header'>Upload video</h1>
            <h2 className='upload__subheader'>Video thumbnail</h2>
            <img className='upload__thumbnail' src={VideoThumbnail} alt='video thumbnail'></img>
            <form className='upload__form'
                  onSubmit={handlePublish}>
                <h2 className='upload__subheader-form'>Title your video</h2>
                <input className='upload__title-input' name="title" type="text" id='title-input' placeholder='Add a title to your video'></input>
                <h2 className='upload__subheader-form'>Add a video description</h2>
                <textarea className="upload__description-input" name="description" type="text" id="description-input" placeholder="Add a description to your video"></textarea>
                <div className='buttons'>
                    <button className="buttons__publish">Publish</button>
                    <button className="buttons__cancel">Cancel</button>
                </div>
            </form>
        </section>
    )
}

export default UploadPage;