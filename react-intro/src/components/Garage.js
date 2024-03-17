import Car from "./Car";

function Garage(){
    const brand='Ferrari';
    const color="Red";

    const carInfo={carBrand:'ford',carColor:'Black'};
    return(<>
      {/* <Car brand={brand} color={color}></Car> */}
      <Car carInfo={carInfo}/>
    </>)
}

export default Garage;