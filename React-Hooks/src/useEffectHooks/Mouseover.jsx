import React,{Component} from "react";

class Mouseover extends Component{
    constructor(props){
        super(props)
        this.state={
            x:0,
            y:0
        }
    }
    positionOfMouse=(e)=>{
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }

    componentDidMount(){
        window.addEventListener("mousemove",this.positionOfMouse);
        console.log("Mounting.....")
    }
    render(){
        return(
            <>
            <div>
                {/* <button onClick={this.toggle}>Toggle Button</button> */}
                <p>X: {this.state.x} Y: {this.state.y}</p>
            </div>
            </>
        )
    }
}

export default Mouseover;