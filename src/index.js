import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LikeCounter from './components/APP/LikeCounter/LikeCounter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <h1>LATES POST</h1> */}
  </React.StrictMode>
);

