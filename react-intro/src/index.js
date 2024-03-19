import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Car from './components/Car';
import reportWebVitals from './reportWebVitals';
import LearnReact from './components/ReactLearn';
import Apple from './components/AppleClass';
import Garage from './components/Garage';
import Header from './components/header';
import Color from './components/useStateDemo';
import Brand from './components/useStateUsingClass';
import Car1 from './components/Car1';
import Scooter from './components/Scooter';
import ArrCompUpdate from './components/UpdatingArraysUseState';
import Grocery from './useStatePropsExer/Grocery';
import Input from './useStatePropsExer/input';
import Counter from './useStatePropsExer/Counter';
import Toggle from './useStatePropsExer/Toggle';
import CountWord from './useStatePropsExer/wordCounter';
import Addition from './useStatePropsExer/Addition';

function ReactIntro(){
  return(
    <h1>Starting React Course to learn</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ReactIntro></ReactIntro> */}
    {/* <Car></Car> */}
    {/* <LearnReact></LearnReact> */}
    {/* <Apple></Apple> */}
    {/* <App /> */}
    {/* <Garage></Garage> */}
    {/* <Header></Header> */}
    {/* <Color></Color> */}
    {/* <Brand></Brand> */}
    {/* <ArrCompUpdate></ArrCompUpdate> */}
    {/* <Car1></Car1> */}
    {/* <Scooter></Scooter> */}
    {/* <Grocery></Grocery> */}
    {/* <Input/> */}
    {/* <Counter/> */}
    {/* <Toggle></Toggle> */}
    {/* <CountWord></CountWord> */}
    <Addition/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
