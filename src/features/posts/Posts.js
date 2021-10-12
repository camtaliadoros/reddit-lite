import './Posts.css';
import React, { useEffect } from 'react';
import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, isLoadingPosts, loadPosts } from './postsSlice';


export default function Posts() {
    const dispatch = useDispatch();
    const loading = useSelector(isLoadingPosts);
    const posts = useSelector(selectPosts);


    useEffect(() => {
        dispatch(loadPosts());
      }, [dispatch]);


    if(loading) {
        return <div>Loading</div>;
    }

    return (
        <div className="post-listing">
            {posts.map((post, index )=> <Post key={index} post={post}/>)}
        </div>
    )
};
