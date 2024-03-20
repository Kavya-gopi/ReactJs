import './student.css';
import PropTypes from "prop-types";
export const Student = (props)=>{
    return(
        <>
        <div className="student">
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>IsMarried</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.isMarried?'Yes':'No'}</td>
            </tr>
            </tbody>
        </table>
        </div>
        </>
    )
}

Student.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isMarried:PropTypes.bool,
}

