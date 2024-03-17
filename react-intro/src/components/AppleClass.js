import React from "react";
class Apple extends React.Component{
    render(){
        const {appleInfo} = this.props;
        const {type,color} = appleInfo;
        return(<>
        <h2>Here I have created class components</h2>
        <h3>Iam a Apple class component</h3>
        <h1> Iam a {color} {type} Apple</h1>
        </>)
    }
}

export default Apple;