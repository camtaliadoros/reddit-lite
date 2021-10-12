import './Post.css';
import React, { useState, useEffect } from 'react';
import Votes from '../../components/votes/Votes';
import { useSelector, useDispatch } from 'react-redux';
import commentIcon from '../../resources/comment.svg';
import PostContent from '../../components/content/PostContent';
import { loadCommentsData } from '../comments/commentsSlice';
import Comments from '../comments/Comments';
import { timeElapsed } from '../../utilities/utilities';


export default function Post({ post }) {
    const [isActive, setActive] = useState(false);
    const dispatch = useDispatch();
    // const categories = useSelector(selectCategories);

    const postId = post.data.id;
    const title = post.data.title;
    const category = post.data.subreddit;
    const time = (post.data.created * 1000);
    const author = post.data.author;
    const commentsUrl = `/r/${category}/comments/${postId}`;
    const numOfComments = post.data.num_comments;


    const fetchComments = () => {
        dispatch(loadCommentsData(commentsUrl));
    }

    const handleToggle = () => {
        setActive(!isActive);
        if (!isActive) {
            dispatch(loadCommentsData(commentsUrl));
        }
    }
    
    return (
        <div className="post-card">
            <div className="row">
                <Votes post={post}/>
                <div className="post-header">
                    <h2 className="post-title">{title}</h2>
                    <div className="row">
                        {/* <img className="category-icon" src={categoryIconUrl}/> */}
                        <h4 className="category-title">{category}</h4>
                    </div>
                    <p className="time-display">{timeElapsed(time)}</p>
                </div>
            </div>
            <div className="post-body">
                <PostContent post={post} />
                {/* <img src={media}/> */}
                <hr></hr>
                <div className="post-info row">
                    <p className="username-text">{author}</p>
                    <div className="row">
                        <button className={`comments-btn row ${isActive ? "active" : ""}`} onClick={handleToggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24.452" height="25.866" viewBox="0 0 24.452 25.866">
                                <path id="Icon_material-mode-comment" data-name="Icon material-mode-comment" d="M25.439,5.245A2.242,2.242,0,0,0,23.205,3H5.245A2.252,2.252,0,0,0,3,5.245v13.47A2.252,2.252,0,0,0,5.245,20.96H20.96l4.49,4.49Z" transform="translate(-2 -2)" fill="none" stroke="#7d7d7d" stroke-width="2"/>
                            </svg>

                            <p>{numOfComments}</p>
                        </button>
                    </div>
                </div>
                <div className={`comments-listing ${isActive ? "active" : ""}`}>
                    <Comments postId={postId} isVisible={isActive}/>
                </div>
            </div>
        </div>
    )
};
