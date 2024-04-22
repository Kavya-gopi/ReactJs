import React,{useState,useEffect} from "react";
import axios from "axios";

function DataFetching(){
    const [products,setProducts] = useState([]);
    useEffect(()=>{
       axios
       .get("https://api.escuelajs.co/api/v1/products")
       .then(res=>{
        console.log(res);
        setProducts(res.data);
    })
       .catch(err=>console.log(err));
    },[])
    return (
        <>
        <h1>Products</h1>
        <ul>
            {products.map(product=>(
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
        </>
    )
};
export default DataFetching;