import './Votes.css';
import { useState } from 'react';
import Arrow from './Arrow';


export default function Votes({ post }) {
    const upVotes = post.data.ups;
    const downVotes = post.data.downs;

    const [userDelta, setUserDelta] = useState(0);


    const handleUp = e => {
        e.preventDefault();

        setUserDelta(1);

        document.getElementById('upBtn').disabled = true;
        document.getElementById('downBtn').disabled = false;

    }

    const handleDown = e => {
        e.preventDefault();

        setUserDelta(-1);

        document.getElementById('downBtn').disabled = true;
        document.getElementById('upBtn').disabled = false;
    }

    const countVotes = () => {
        const totalVotes = upVotes + downVotes + userDelta;

        if (totalVotes < 1000) {
            return totalVotes;
        } else if (totalVotes >= 1000) {
            
            return `${(Math.round(totalVotes / 100) / 10)}k`;
        }

    }

    return (
        <div className="column votes">
            <button id="upBtn" onClick={handleUp}><Arrow direction="up" selected={userDelta === 1}/></button>
                <p>{countVotes()}</p>
            <button id="downBtn" onClick={handleDown}><Arrow direction="down" selected={userDelta === -1}/></button>
        </div>
    )
}