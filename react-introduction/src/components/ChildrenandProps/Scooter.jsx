import PropTypes from 'prop-types';

export const Scooter = (props)=>{
    return <>
    <p>My Details</p>
    {props.children}
    </>
}

Scooter.propTypes = {
    childer:PropTypes.array,
}