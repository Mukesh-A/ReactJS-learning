import React, { Component } from 'react'

export default class Message extends Component {

    constructor(){
        super()
            this.state = {
                message: "welcome Visitor"
            }
        
    }
    changeMessage(){
        this.setState({
            message: "Welcome flok"
        })
    }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={() => {this.changeMessage()}}>Click</button></div>
    )
  }
}
