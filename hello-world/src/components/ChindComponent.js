import React, { Component } from 'react'

class ChindComponent extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.greetingHandler}>Greeting</button>
      </div>
        // console.log(this.props.greetingHandler)
    )
  }
}

export default ChindComponent
