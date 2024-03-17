import Car from "./Car";
import Apple from "./AppleClass";

function Garage(){
    const brand='Ferrari';
    const color="Red";

    const numberList = [1,2,3,4,5,6,7,8,9];
    // const carInfo={};
    // const carInfo={carBrand:'ford',carColor:'Black'};
    const carList = [
        {brand:'Ford',color:'Red'},
        {brand:'BMW',color:'White'},
        {brand:'Testla',color:'Black'}
    ];

    // const showCarInfo = carInfo.carBrand!==undefined && carInfo.carColor!==undefined;

    // const carInfo={carBrand:'ford',carColor:'Black'};
    const appleInfo={type:'Banglore',color:'Green'};
    return(<>
      {/* <Car brand={brand} color={color}></Car> */}
      {/* {showCarInfo?
      <Car carInfo={carInfo}/>:null} */}
      <Apple appleInfo={appleInfo} />

      <ul>
        {carList.map((carInfo)=><li key={carInfo.brand}><Car carInfo={carInfo}></Car></li>)}
      </ul>

      <ul>
        {numberList.map((num,index)=><li key={index}>{num}</li>)}
      </ul>
    </>)
}

export default Garage;