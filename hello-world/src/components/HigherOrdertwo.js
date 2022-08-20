import React, { Component } from 'react'
import UpdatedComponent
from './HigherOrderThree'

export class HigherOrdertwo extends Component {

  

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>{this.props.name}Hover {count}</h2>
      </div>
    )
  }
}
 export default UpdatedComponent(HigherOrdertwo)
