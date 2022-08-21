import React, { Component } from 'react'
import UpdatedComponent from './HigherOrderThree'

class HigherOrder extends Component {
  
  render() {

    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Click {count}</button>
      </div>
    )
  }
}

export default UpdatedComponent(HigherOrder)
