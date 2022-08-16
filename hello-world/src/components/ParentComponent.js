import React, { Component } from 'react'
import ChindComponent from './ChindComponent'

export class ParentComponent extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           name:"Mukesh"
        }
        this.greetingName = this.greetingName.bind(this)
      }
      greetingName(){
          alert(`hello ${this.state.name}`)
      }
  render() {
    return (
      <div>
        <ChindComponent greetingHandler={this.greetingName}/>
      </div>
    )
  }
}

export default ParentComponent
