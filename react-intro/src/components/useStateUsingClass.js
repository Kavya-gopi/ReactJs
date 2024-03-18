import React,{Component} from "react";

class Brand extends Component{
    constructor(){
        super();
        this.state={brand:'ford'};
    }
    render(){
        return(
            <>
            <h2>My Brand is {this.state.brand}</h2>
            <button onClick={()=>this.setState({brand:'ferrari'})}>Change Brand</button>
            </>
        )
    }
}

export default Brand;