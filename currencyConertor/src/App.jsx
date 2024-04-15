import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [amount,setAmount]=useState(1);
  const [fromCurrency,setFromCurrency]= useState('USD');
  const [toCurrency,setToCurrency]=useState('CAD');
  const [convertedCurrency,setConvertedCurrency]=useState(null);
  const [exchangerate,setExchangeRate]= useState(null);

  const handleChange=(e)=>{
       const value=parseFloat(e.target.value);
       setAmount(isNaN(value)?0:value);
  }
  useEffect(()=>{
    const getExchangeRate = async()=>{
      try{
        let url=`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response = await axios.get(url);
        console.log(response);
        setExchangeRate(response.data.rates[toCurrency]);
      }catch(error){
        console.error("An error occured",error);
      }
    }
    getExchangeRate();
   
  },[fromCurrency,toCurrency]);

  useEffect(()=>{
    if(exchangerate!==null){
      setConvertedCurrency((amount*exchangerate).toFixed(2));
    }
  },[amount,exchangerate]);
  return (
    <>
      <div className="container">
        <div className="title-div">
          <h2>Currency Convertor</h2></div>
        <div className="box-pic">
          <img src="images/1.jpg" alt="img" height="200px"></img>
        </div>
        <div className="input-container">
          <div className="input-group">
            <label htmlFor="amt">Enter Amount:</label>
            <input type="text" 
            placeholder="Amount" 
            id="amt" 
            value={amount}
            onChange={handleChange}></input>
          </div>
          <div className="input-group">
            <label htmlFor="fromCurrency">From Currency:</label>
            <select id="fromCurrency" value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)}>
                <option value="USD">USD-AMERICAN SAMOA</option>
                <option value="AUD">AUD-AUSTRALIA</option>
                <option value="BDT">BDT-BANGLADESH</option>
                <option value="BRL">BRL-BRAZIL</option>
                <option value="CAD">CAD-CANADA</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="tocurrency">To Currency:</label>
            <select id="tocurrency" value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)}>
                <option value="USD">USD-AMERICAN SAMOA</option>
                <option value="AUD">AUD-AUSTRALIA</option>
                <option value="BDT">BDT-BANGLADESH</option>
                <option value="BRL">BRL-BRAZIL</option>
                <option value="CAD">CAD-CANADA</option>
            </select>
          </div>
          <div className="result">
            <p>{amount} {fromCurrency} is equal to {convertedCurrency} {toCurrency}</p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
