import React,{Component} from "react";

class ClassC extends Component{
    render(){
        return <>
         <h1>class Component</h1>
         <h2>{this.props.name} age: {this.props.age}</h2>
        </>
       
    }
}

export default ClassC;