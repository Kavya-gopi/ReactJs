import React, {Component} from "react";

class ClassCompoEffect extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1});
    }
    decrement=()=>{
        this.setState({count:this.state.count-1});
    }
    componentDidMount(){
       document.title=`Counter ${this.state.count}`
       console.log("Mounting....")
    }
    componentDidUpdate(){
        document.title=`Counter ${this.state.count}`
        console.log("Updating....")
    }
    componentWillUnmount(){
        document.title="Counter App";
        console.log("Unmounting....")
    }

    render(){
        return(
            <>
            <div>
                <p>Count:{this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
            </>
        )
    }
}

export default ClassCompoEffect;