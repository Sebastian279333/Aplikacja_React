import { BrowserRouter, Route, Routes} from "react-router";
import"./App.css";
import Posts from "./pages/Post";
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Posts/> }></Route>
        <Route path="/posts" element={ <Posts/> }></Route>
        <Route path="/" element={ <Login/> }></Route>
        <Route path="/login" element={ <Login/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
