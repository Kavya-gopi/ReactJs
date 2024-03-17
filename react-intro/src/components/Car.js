function Car(props){
    // const {brand,color} = props;
    // const text=`Hi Iam a ${color} ${brand} Car`
    const {carInfo} = props;
    const {brand,color} = carInfo;
    const text = `Hi Iam a ${brand} ${color}`;
    return(<>
       {/* <h2>Hi, Iam a Car Component</h2> */}
       <h3>{text}</h3>
       {/* <h4>{carBrand}</h4> */}
    </>)
}

export default Car;