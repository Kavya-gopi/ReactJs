import {PropTypes} from 'prop-types';
export const ChildComponent = (props)=>{
    return (
        <>
        <p>Learning Proptypes and ChildComponents</p>
        {props.children}
        </>
    )
}

ChildComponent.propTypes={
     children:PropTypes.array,
}