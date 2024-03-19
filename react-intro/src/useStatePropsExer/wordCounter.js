import '../App.css';
import { useState } from "react";
function CountWord() {
  let [count, setCount] = useState(0);
  let [inputVal, setInputVal] = useState("");
  let countlength = inputVal.length;
  console.log(countlength);

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  console.log(setInputVal);
  function wordLength() {
    setCount(countlength);
    setInputVal('');
  }

  function reset() {
    setCount(0);
    setInputVal("");
  }

  return (
    <>
    <div className="word">
      <h1>Word Counter</h1>
      <input type="textarea" value={inputVal} onChange={handleChange}></input>

      <br></br>
      <button onClick={wordLength}>count</button>
      
      <button onClick={reset}>reset</button>
      <p>{count}</p>
      </div>
    </>
  );
}

export default CountWord;
