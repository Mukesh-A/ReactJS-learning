import React, { Component } from 'react'

 class ClassTimer extends Component {

    interval 
    constructor(props) {
      super(props)
    
      this.state = {
         timer: 0
      }
    }

    componentDidMount(){
        this.interval = setInterval(()=> {
         this.setState(prevstate =>({timer: prevstate.timer + 1}))   
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
  render() {
    return (
      <div>
        class Timer - {this.state.timer}
        <button onClick={()=> clearInterval(this.interval)}>resret</button>
      </div>
    )
  }
}

export default ClassTimer
