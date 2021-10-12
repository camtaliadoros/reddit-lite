import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectComments, loading } from './commentsSlice';
import Comment from './Comment';

export default function Comments({postId, isVisible}) {
    const [numOfComments, setNumOfComments] = useState(0);
    const [isActive, setActive] = useState(true);
    const comments = useSelector(selectComments);
    const isLoading = useSelector(loading);

    useEffect(() => {
        setNumOfComments(3);
    }, [isVisible])


    if (isLoading) {
        return (
            <p>Loading</p>
        )
    } 


    const currentPostComments = comments[postId];

    const commentsToShow = currentPostComments ? currentPostComments.slice(0, numOfComments) : [];


    const handleClick = () => {
        if(numOfComments < currentPostComments.length - 1) {
            setNumOfComments(numOfComments + 3);
        } else {
            setActive(false);
        }
        
    }
    return (
        <div className="comment">
            {commentsToShow.map((comment, id) => <Comment id={id} comment={comment} />)}
            <button className={`${isActive ? "active" : ""}`}onClick={handleClick}>Load more comments</button>
        </div>
        
    )

}