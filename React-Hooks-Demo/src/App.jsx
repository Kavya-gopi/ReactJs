import { useCallback, useState } from 'react'
import Title from './Components/Title'
import Count from './Components/Count';
import Button from './Components/Button';



function App() {
  const [count,setCount]=useState(0);

  const increment=useCallback(
    ()=>{
      setCount(prev=>prev+1);
    }
  )

  return (
    <>
     <Title/>
     <Count text={"Age"} count={count}/>
     <Button handleClick={increment}>Increment Age</Button>
    </>
  )
}

export default App
