import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LikeCounter from "../components/APP/LikeCounter/LikeCounter";
import { fetchPosts } from "../store/postSlice";

function Posts() {
  return (
    <>
      <h1 className="latest-post-title">Latest Post</h1>
      <article>
        <div className="posts">
          <LikeCounter
            title="Pierwszy post"
            descryption="Opis naszego artykułu"
            count="5"
            color="lightgreen"
            author="Jan Kowalski"
          ></LikeCounter>
          <LikeCounter
            title="2. post"
            descryption="Opis naszego artykułu"
            count="2"
            color="lightblue"
            author="Krystian Rzeżba"
          ></LikeCounter>
          <LikeCounter
            title="3. post"
            descryption="Opis naszego artykułu"
            count="19"
            color="yellow"
            author="Alicja Nowak"
          ></LikeCounter>
          <LikeCounter
            title="4. post"
            descryption="Opis naszego artykułu"
            count="8"
            color="darkgreen"
            author="Natalia Kawińska"
          ></LikeCounter>
        </div>
      </article>
    </>
  );
}
export default Posts;
