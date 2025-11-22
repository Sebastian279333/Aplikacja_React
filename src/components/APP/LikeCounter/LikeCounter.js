import { useState, useEffect } from "react";
import "./LikeCounter.css";

function LikeCounter({ title, descryption, count, color, author }) {
  const [likes, setLikes] = useState(+count);
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // useEffect(() => {
  //     console.log("use effect odpalony");
  //     document.title = `${likes} Lików dla posta`;
  // }, [likes] )

  useEffect(() => {
    if (likes === 0) {
      document.title = "MiniFeed - Liczba lajków";
    }
    if (likes > 20) {
      document.title = "Jesteś absolutnym viralem 🚀";
    } else {
      document.title = `(${likes}) Nowe lajki na MiniFeed`;
    }
  }, [likes]);

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
  };

  return (
    <div className="post" style={{ backgroundColor: color }}>
      <p style={counterStyle}>Liczba lików {likes}</p>
      <h2>{title}</h2>
      <p>{descryption}</p>
      <div className="actions">
        <button onClick={handleLike}>Polub 👍</button>
        <button onClick={handleDisLike}>DisLike 👍</button>
      </div>
      <p>{author}</p>
    </div>
  );
}

export default LikeCounter;
