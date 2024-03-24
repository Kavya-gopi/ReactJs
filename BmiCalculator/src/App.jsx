import { useState } from 'react'

import './App.css'

function App() {

  const [height,setHeight] = useState("");
  const [weight,setWeight] = useState("");
  const [bmi,setBmi] = useState(null);
  const [bmiStatus,setBmiStatus] = useState("");
  const [error,setError] = useState('');
 
  const calculateBmi=()=>{
    const heightIsValid = /^\d+$/.test(height);
    const weightIsValid = /^\d+$/.test(weight);

    if(heightIsValid && weightIsValid){
      const heightInMeters = height/100;
      const bmiValue = weight/(heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      setError("")
      if(bmiValue<18.5){
        setBmiStatus('Under Weight');
      }
      else if(bmiValue>18.5 && bmiValue<24.9){
        setBmiStatus('Normal Weight');
      }
      else if(bmiValue>24.9 && bmiValue<29.9){
        setBmiStatus('Over Weight');
      }
      else{
        setBmiStatus('Obese');
      }
    }
    else{
      setError("Please Enter valid Data to height and weight");
    }

  }

  const clear = ()=>{
     setHeight("");
     setWeight("");
     setError("");
     setBmi("");
     setBmiStatus("");
  }

  return (
    <>
    <div className='bmiContainer'>
      <div className='input-fields'>
        <h1>Bmi Calculator</h1>
        {error && <p className='error'>{error}</p>}
        <div className='input'>
        <label htmlFor='height'>Height (in cm)</label>
        <input type='text' id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
        </div> 
        <div className='input'>
        <label htmlFor='weight'>Weight (in kg)</label>
        <input type='text' id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
        </div> 
        <button className='calculate' onClick={calculateBmi}>Calculate BMI</button>
        <button className='clear' onClick={clear}>Clear</button>
      </div>
      {bmi && <div className='result'>
        <p>Your BMI value is :<span>{bmi}</span></p>
        <p>Status: <span>{bmiStatus}</span></p>
      </div>}
    </div>
    </>
  )
}

export default App
