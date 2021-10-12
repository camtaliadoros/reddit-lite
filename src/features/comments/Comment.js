import { timeElapsed } from '../../utilities/utilities';
import './comment.css';

export default function Comment({id, comment}) {
    const commentAuthor = comment.data.author;
    const commentBody = comment.data.body;
    const timePosted = (comment.data.created * 1000);

    return (
        <div className="comment-container">
            <div className="row comment-header">
                <h6 className="username-text">{commentAuthor}</h6>
                <p className="time-display">{timeElapsed(timePosted)}</p>
            </div>
            <p className="comment-text">{commentBody}</p>
        </div>

    )
}