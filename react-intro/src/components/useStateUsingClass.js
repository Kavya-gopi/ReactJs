import React,{Component} from "react";

class Brand extends Component{
    constructor(){
        super();
        this.state={brand:'ford',color:'Blue'};
    }
    render(){
        return(
            <>
            <h1>My Car Details</h1>
            <h2>My Brand is {this.state.brand}</h2>
            <h2>My Color is {this.state.color}</h2>
            <button onClick={()=>this.setState((previousState)=>{return {...previousState,color:'Black',brand:'ferrari'}})}>Change Brand</button>
            </>
        )
    }
}

export default Brand;