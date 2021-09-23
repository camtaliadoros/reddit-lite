import './Posts.css';
import React from 'react';
import Post from './Post';
import { useSelector } from 'react-redux';
import { selectPosts } from './postsSlice';


export default function Posts() {
    const posts = useSelector(selectPosts);
    return (
        <div className="post-listing">
            {posts.map(post => <Post id={post.id} data={post}/>)}
        </div>
    )
};
