import React from 'react';
import './Comments.scss';
import UserAvatar from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/images/add_comment.svg";

function Comments (){
    // write function stuff in here
    
    // in the return is where your jsx/html type stuff goes
        return (
        
            <section className="comments">
                <h2 className='comments__head'>Join the conversation</h2>
                <form className='comments__form'>
                    <img className='comments__form-avatar' src={UserAvatar} alt='user avatar'/>
                    <input className="comments__form-input" name="comments" type="text" id="comments" placeholder="Add a new comment"></input>
                    <a><img className="comments__form-button" src={CommentIcon} alt='upload button'/></a>
                </form>
                {/* data for comments coming from comments property of the main-video object stored in state */}
                <div className='comments__container'>
                    <div className='single-comment'>
                        <img className='single-comment__avatar' src='' alt='user avatar'/>
                        <div className='single-comment__info'>
                            <h3 className='single-comment__username'></h3>
                            <p className='single-comment__date'></p>
                        </div>
                        <p className='single-comment__text'></p>
                    </div>
                </div>
                
            </section>
          
        )
    
}


export default Comments;
