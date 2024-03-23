import { useState,useEffect } from "react";
import './AdviceApp.css';
export const AdviceApp=()=>{
    const [advice,setAdvice] = useState('Eat Well,Sleep Well');
    const [count,setCount] = useState(0);

    async function getAdvice(){
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data.slip.advice);
        setCount((count)=>count+1);
    }
    // useEffect(function(){
    //     getAdvice();
    // },[]); 

    return(
        <>
        <div className="app">
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Get Advice</button>
        <p>You Have read <span>{count}</span> pieces of advice</p>
        </div>
        </>
    )
}