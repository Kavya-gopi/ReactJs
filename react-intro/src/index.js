import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Car from './components/Car';
import reportWebVitals from './reportWebVitals';
import LearnReact from './components/ReactLearn';

function ReactIntro(){
  return(
    <h1>Starting React Course to learn</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactIntro></ReactIntro>
    <Car></Car>
    <LearnReact></LearnReact>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
