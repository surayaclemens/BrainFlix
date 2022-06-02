import React from 'react';
import './Comments.scss';
import UserAvatar from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/images/add_comment.svg";

function Comments ({currentVideo}){
    
        return (
        
            <section className="comments">
                <h2 className='comments__head'>Join the conversation</h2>
                <form className='form'>
                    <img className='form__avatar' src={UserAvatar} alt='user avatar'/>
                    <div className='form__actions'>
                        <textarea className="form__textarea" name="comments" type="text" id="comments" placeholder="Add a new comment"></textarea>
                        <button className="form__button" src={CommentIcon} alt='upload button'>Comment</button>
                    </div>
                </form>
          
{/* making a container of comments. map through the detailed video array, for each comment object return a single comment container that has an image and takes props for name, comment, likes, timestamp. defined in other component file called SingleComment */}
                    {!currentVideo.comments ? "" : currentVideo.comments.map((comment) => {
                        let unixTime = comment.timestamp
                        let commentDate = (parseInt(unixTime));
                        let formattedDate = new Date(commentDate).toLocaleDateString();
                        return (
                            <div className='single-comment'>
                                <div className='single-comment__info'>
                                    <img className='single-comment__avatar' src='' alt=''/>
                                    <div className='single-comment__post'>
                                        <h3 className='single-comment__username'>{comment.name}</h3>
                                        <p className='single-comment__date'>{formattedDate}</p>
                                    </div>
                                    <p className='single-comment__likes'>{comment.likes}</p>
                                </div>    
                                <p className='single-comment__text'>{comment.comment}</p>  
                            </div>  
                        )
                    })}               
            </section>     
        )    
}

export default Comments;