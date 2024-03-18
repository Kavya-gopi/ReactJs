import { useState } from "react";

function Scooter(){
    let [scooter,setScooter] = useState({
        color:'Yellow',
        brand:'Fasino',
        year:'2020',
        price:'80000'
    });

    const UpdateScooter=()=>{
        setScooter(a=>{
            return {...a,color:'Majentha',brand:'Duo'}
        })
    }

    return(
        <>
        <h1>My Scooter Details</h1>
        <p>Color: {scooter.color}</p>
        <p>Brand: {scooter.brand}</p>
        <p>Year: {scooter.year}</p>
        <p>Price: {scooter.price}</p>

        <button onClick={UpdateScooter}>Change Details</button>
        </>
    )
}

export default Scooter;