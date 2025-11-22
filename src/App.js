import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Posts from "./pages/Post";
import Login from "./pages/Login";
import PostDetail from "./pages/PostDetail/PostDetail";
import Nav from "./components/Nav/Nav";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ThemeProvider, ThemeContext } from "./context/ThemeContex";
import { useContext, useEffect } from "react";

function AppContent() {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#222";
    document.body.style.color = theme === "light" ? "#222" : "#fff";
  }, [theme]);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/Post" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
