import React,{useState,useEffect} from "react";
import axios from "axios";

function DataFetching1(){
    const [product,setProduct] = useState({});
    const [id,setId] = useState(1);
    useEffect(()=>{
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[id]);
    return(
        <>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <br></br>
        <p>{product.title}</p>
        </>
    )

};

export default DataFetching1;