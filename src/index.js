import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/APP/App';
import LikeCounter from './components/APP/LikeCounter/LikeCounter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className='posts'>
        <LikeCounter></LikeCounter>
        <LikeCounter></LikeCounter>
        <LikeCounter></LikeCounter>
    </div>
  </React.StrictMode>
);

