import React from 'react';
import './UploadPage.scss';
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg"
import {Link} from 'react-router-dom';


function UploadPage() {

  const handlePublish = (event) => {
      event.preventDefault()
      const form = event.target
      const title = form.title.value
      const description = form.description.value
      
      if (!title || !description) return alert("Please fill out all fields")
      if (title && description) {
          return alert("Upload successful!")
      }
  }

    return (
        <section className='upload'>
            <h1 className='upload__header'>Upload video</h1>
            <h2 className='upload__subheader'>Video thumbnail</h2>
            <div className='upload__container'>
                <img className='upload__thumbnail' src={VideoThumbnail} alt='video thumbnail'></img>
                <form className='upload__form'
                    onSubmit={handlePublish}>
                    <h2 className='upload__subheader-form'>Title your video</h2>
                    <input className='upload__title-input' name="title" type="text" placeholder='Add a title to your video'></input>
                    <h2 className='upload__subheader-form'>Add a video description</h2>
                    <textarea className="upload__description-input" name="description" type="text" placeholder="Add a description to your video"></textarea>
                    <div className='buttons'>
                            <button className="buttons__publish"><Link to={"/"} className='publish__link'>Publish</Link></button>
                        
                        <button className="buttons__cancel">Cancel</button>
                    </div>
                </form>
            </div>
            <hr className='upload__line'></hr>    
        </section>
    )
}

export default UploadPage;