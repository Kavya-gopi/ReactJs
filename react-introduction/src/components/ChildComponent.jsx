import {PropTypes} from 'prop-types';
export const ChildComponent = (props)=>{
    return (
        <>
        <p>Learning Proptypes and ChildComponents</p>
        <p>{props.children}</p>
        </>
    )
}

ChildComponent.propTypes={
     children:PropTypes.array,
}