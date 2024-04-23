import React,{useState} from "react";

export const ToggleVisibility=()=>{
    const [toggle,setToggle] = useState(true);
    const [bgColor,setBgColor]=useState("black");
    const [color,setColor] = useState("white");
    const toggleChange=()=>{
        setToggle(!toggle);
        setBgColor("white");
        setColor("black");
    }
    return(
        <>
        <div className="toggleclass">
            <button onClick={toggleChange}>Toggle Me...</button>
            {toggle && <p>Toggle Theme</p>}
        </div>
        </>
    )
}