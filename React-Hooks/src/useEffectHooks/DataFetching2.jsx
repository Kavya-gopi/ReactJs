import React,{useState,useEffect} from "react";
import axios from "axios";

function DataFetching2(){
    const [product,setProduct] = useState({});
    const [id,setId] = useState(1);
    const [idButton,setIdButton] = useState(1);

    const handleClick=()=>{
        setIdButton(id);

    }
    useEffect(()=>{
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(er=>console.log(er))
    },[idButton]);



    return(
        <>
         <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
         <br></br>
         <button onClick={handleClick}>Get Products</button>
         <br></br>
         <p>{product.title}</p>
        </>
    )
}

export default DataFetching2;