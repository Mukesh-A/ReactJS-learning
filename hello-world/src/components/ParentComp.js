import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "mukesh"
      }
    }

    //pure components are components which will render when their is a chnage in state or props is their is no change then pure components will not render

    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name: "mukesh"
            })
        }, 5000)
    }
    
  render() {
    console.log("!!!!!!!!!Parent!!!!!!!!!")
    return (
      <div>
        ParentComp
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
