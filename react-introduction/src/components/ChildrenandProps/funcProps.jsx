import PropTypes from "prop-types";

export const FunctionSample=(props)=>{
    const {handleClickYes,handleClickNo} = props
    return(
        <div>
            <p>Are you Completed the Assignment?</p>
            <button onClick={handleClickYes}>Yes</button>
            <button onClick={handleClickNo}>No</button>
        </div>
    )
}

FunctionSample.propTypes = {
    handleClickNo:PropTypes.func.isRequired,
    handleClickYes:PropTypes.func.isRequired,
}