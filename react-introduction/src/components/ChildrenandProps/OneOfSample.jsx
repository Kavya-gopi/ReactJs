import PropTypes from "prop-types";
export const OneOfSample=(props)=>{
    const {color}=props;
    return (<>
       <div style={{backgroundColor:color,padding:"10px",color:"White"}}>
       <h2>oneOf Type PropTypes Demo</h2>
       <p>I need {color} color</p>
       </div>
    </>)
}

OneOfSample.propTypes={
    color:PropTypes.oneOf(["red","green","blue"]).isRequired,
}