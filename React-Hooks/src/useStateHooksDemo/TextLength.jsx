import { useState } from "react"

export const TextLength = ()=>{
    const [text,setText] = useState('');
    // const [length,setLength] = useState(0);
    
    return(
        <>
        <div>
            <textarea value={text} onChange={(e)=>setText(e.target.value)}></textarea>
            <p>Character Count : {text.length} </p>
        </div>
        </>
    )
}