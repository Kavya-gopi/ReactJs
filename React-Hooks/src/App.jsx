import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increment= ()=>{
    setCount(prevState => prevState+1);
  }

  const decrement = ()=>{
    setCount(prevState=>prevState-1);
  }

  return (
    <>
      <div className='state-ex'>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
    </>
  )
}

export default App
