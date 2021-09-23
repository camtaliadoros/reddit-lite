import './Post.css';
import React from 'react';
import Vote from '../votes/Votes';
import { useSelector } from 'react-redux';
import categoryIcon from '../../resources/search.svg';
import commentIcon from '../../resources/comment.svg';
import mockVoting from '../../resources/mock-voting.svg';


export default function Post({ data }) {
    const { title, category, time, body, author, media, id } = data; 
    return (
        <div className="post-card">
            <div className="row">
                {/* <Vote /> */}
                <img className="vote" src={mockVoting} />
                <div className="post-header">
                    <h2 className="post-title">{title}</h2>
                    <div className="row">
                        <img className="category-icon" src={categoryIcon}/>
                        <h4 className="category-title">{category}</h4>
                    </div>
                    <p className="time-display">{time}</p>
                </div>
            </div>
            <div className="post-body">
                <p className="content-text">{body}</p>
                <img src={media}/>
                <hr></hr>
                <div className="post-info row">
                    <p className="username-text">{author}</p>
                    <div className="row">
                        <button className="comments-btn row">
                            <img src={commentIcon} alt="comments" />
                            <p>12</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};
