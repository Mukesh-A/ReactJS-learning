import React, { Component } from 'react'
import UpdatedComponent from './HigherOrderThree'

class HigherOrdertwo extends Component {

  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hover {count}</h2>
      </div>
    )
  }
}
 export default UpdatedComponent(HigherOrdertwo)
