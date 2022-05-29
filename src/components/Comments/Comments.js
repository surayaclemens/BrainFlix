import React from 'react';
import './Comments.scss';
import UserAvatar from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/images/add_comment.svg";
import SingleComment from '../SingleComment/SingleComment';

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
                {/* <ul>
                    {currentVideo.comments.map((comment) => {
                        return (
                            <li> 
                            <SingleComment
                                name={comment.name}
                                comment={comment.comment}
                                likes={comment.likes}
                                timestamp={comment.timestamp}
                            />
                            </li> 
                        )
                    })}               
                </ul>    */}
            </section>          
        )    
}

export default Comments;
