
import React, { Component } from 'react'

class Forms extends Component {

constructor(props) {
  super(props)

  this.state = {
     userName: ""
  }
}

//using this event we can capture all the onchange items in the input 
handelUsernameChange = (event) =>{
  this.setState({
    userName: event.target.value
  })
}

  render() {
    return (
      <div>
        <form>
        <div className="">
            <label htmlFor="">Username</label>
            <input type="text"  value={this.state.userName} onChange={this.handelUsernameChange}/>
        </div>
        </form>
      </div>
    )
  }
}

export default Forms



