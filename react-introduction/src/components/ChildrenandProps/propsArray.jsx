import PropTypes from "prop-types"
export const ArraysProps=(props)=>{
    const {items} = props;
    return(
        <>
        <div>
            <h1>Passing Arrays using props</h1>
            <ul>
                {items.map((item)=>(<li key={item.id}>{item.itemName}</li>))}
            </ul>
        </div>
        </>
    )
}

ArraysProps.propTypes = {
    items:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            itemName:PropTypes.string.isRequired,}
        )
    ).isRequired
}