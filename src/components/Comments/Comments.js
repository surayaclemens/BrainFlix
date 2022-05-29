import React from 'react';
import './Comments.scss';
import UserAvatar from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/images/add_comment.svg";
// import SingleComment from '../SingleComment/SingleComment';

function Comments ({currentVideo}){
    
        return (
        
            <section className="comments">
                <h2 className='comments__head'>Join the conversation</h2>
                <form className='comments__form'>
                    <img className='comments__form-avatar' src={UserAvatar} alt='user avatar'/>
                    <textarea className="comments__textarea" name="comments" type="text" id="comments" placeholder="Add a new comment"></textarea>
                    <button className="comments__form-button" src={CommentIcon} alt='upload button'></button>
                </form>
          
{/* making a ul of comments. map through the detailed video array, for each comment object return li of SingleComment that takes props for name, comment, likes, timestamp. defined in other component file called SingleComment */}
                <div>
                    {currentVideo.comments.map((comment) => {
                        return (
                            <div className='single-comment'>
                                <img className='single-comment__avatar' src='' alt='user avatar'/>
                                <div className='single-comment__info'>
                                    <h3 className='single-comment__username'>{comment.name}</h3>
                                    <p className='single-comment__date'>{comment.timestamp}</p>
                                </div>    
                                <p className='single-comment__text'>{comment.comment}</p>  
                            </div>  

                        )
                    })}               
                </div>   
            </section>  
              
        )    
}

export default Comments;

{/* <SingleComment
key={comment}
name={comment.name}
comment={comment.comment}
likes={comment.likes}
timestamp={comment.timestamp}
/> */}