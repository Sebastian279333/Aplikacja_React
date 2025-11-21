import { useState } from 'react';
import './LikeCounter.css';

function LikeCounter() {
    const [likes, setLikes] = useState(0);
    const handleLike = () => {
        setLikes(likes + 1);
    };
    const handleDisLike = () => {
        if (likes < 1) {
            return;
        }
        setLikes(likes - 1);
    };

    const counterStyle = {
        color: likes > 5 ? "red" : "black",
        fontWeight: "bold",
        fontSize: "20px",
    }

    return (
        <div className='post'>
            <p style={counterStyle}>Fajny post! Licz lików {likes}</p>
            <div className='actions'>
                <button onClick={handleLike}>Polub 👍</button>
                <button onClick={handleDisLike}>DisLike 👍</button>
            </div>
        </div>
    );
}

export default LikeCounter;
