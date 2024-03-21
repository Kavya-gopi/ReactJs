import PropTypes from "prop-types";
const cars=[
    {
        image:"images/Car2.jpg",
        price:"$2,00,000",
        model:"Hyundai Grand i10 Nios",
        rating:4.4,
        features:["Engine: 1197cc",
        "FuelType: Petrol/Petrol-CNG",
        "Transmission: AMT Auto/Manual",
         "Mileage: 19.2kpl - 19.4kpl"]

    },
    {
        image:"images/Car1.jpg",
        price:"$20,000,000",
        model:"Lamborghini Urus",
        rating:4.8,
        features:["Engine: 3996-3999cc",
        "FuelType: Petrol",
        "Transmission: Automatic",
         "Mileage: 19.2kpl - 19.4kpl"]

    },
]
function CarCard(props){
    return (
        <>
        <div className="car-container">
           
            <img src={props.image} alt="car-image"/>
            <span className="price">{props.price}</span>
            <h3>{props.model}</h3>
            <p>Rating: {props.rating}</p>
            <h4>Features Available</h4>
            <ul className="lst">
                {/* <li>Engine: 1197cc</li>
                <li>Fuel Type: Petrol/Petrol-CNG</li>
                <li>Transmission: AMT Auto/Manual</li>
                <li>Mileage: 19.2kpl - 19.4kpl</li> */}
                {props.features.map((feature,index)=>(<li key={index}>{feature}</li>))}
            </ul>
           <button>BUY NOW</button>
        </div>
        </>
    );
};

export const CarProfile=()=>{
    return <>
    {cars.map((car,index)=>(
        <CarCard key={index} image={car.image}
        price={car.price}
        model={car.model}
        rating={car.rating}
        features={car.features} />
    ))}
    </>
}

CarCard.propTypes = {
    
        price:PropTypes.string.isRequired,
        model:PropTypes.string.isRequired,
        rating:PropTypes.number.isRequired,
        features:PropTypes.arrayOf(PropTypes.string).isRequired,
    
}
