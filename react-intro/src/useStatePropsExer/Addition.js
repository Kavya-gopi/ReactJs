import { useState } from "react"

function Addition(){
    const [input1,setInput1] = useState('');
    const [input2,setInput2] = useState('');
    const [ans,setAns] = useState(0);

    const add = ()=>{
        setAns(Number(input1)+Number(input2))
        setInput1('');
        setInput2('');
    }
    return(<>
      <div className="additionBox">
        Enter Number1:
        <input type="text" value={input1} onChange={(e)=>setInput1(e.target.value)}></input>
        <br></br>
        Enter Number2:
        <input type="text" value={input2} onChange={(e)=>setInput2(e.target.value)}></input>
        <br></br>
        <button onClick={add}>Add</button>
        <p>{ans}</p>
      </div>
    </>)
}

export default Addition;