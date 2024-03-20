import PropTypes from 'prop-types';
export const Car=(props)=>{
    return <>
      <h1>This is a Car Component</h1>
      <p>{props.Model}</p>
      <p>{props.Brand}</p>
      <p>{props.price}</p>
    </>
}

Car.propTypes = {
    Model:PropTypes.string,
    Brand:PropTypes.string,
    price:PropTypes.number,
}