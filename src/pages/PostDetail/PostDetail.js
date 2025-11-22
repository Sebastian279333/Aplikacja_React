import { useEffect } from "react";
import { useParams } from "react-router";

function PostDetail() {
  // Pobieramy parametry z URL
  const { id } = useParams(); // <-- DESCTRUCTURING

  useEffect(() => {
    console.log(typeof id); // sprawdza typ id
  }, [id]);

  return <>{id ? <h1>Post nr: {id}</h1> : <h1>Brak Postu</h1>}</>;
}

export default PostDetail;
