import Car from "./Car";
import Apple from "./AppleClass";

function Garage(){
    const brand='Ferrari';
    const color="Red";

    const carInfo={carBrand:'ford',carColor:'Black'};
    const appleInfo={type:'Banglore',color:'Green'};
    return(<>
      {/* <Car brand={brand} color={color}></Car> */}
      <Car carInfo={carInfo}/>
      <Apple appleInfo={appleInfo} />
    </>)
}

export default Garage;