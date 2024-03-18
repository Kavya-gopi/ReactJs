import { useState } from "react";
function Car1(){
   let [car,setCar] = useState({//initialState->Object
        color:'Red',
        brand:'Ferrari',
        model:'Active 6g',
        year:2020
   });

   const updateCar = ()=>{
         setCar(previousState =>{
            return {...previousState,color:'Black'}
         })
   }

   return(<>
      <h1>My Car</h1>
      <p>Color: {car.color}</p>
      <p>Brand: {car.brand}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>

      <button onClick={updateCar}>ChangeColor</button>
   </>)
}

export default Car1;