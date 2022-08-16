import React, { Component } from 'react'

class Counter extends Component {

    //snippet rconst
    constructor(props) {
        super(props)
      
        this.state = {
          count: 0
           
        }
      }

      increment(){
        //setState function has 2 parameter so we can add call back function
        this.setState({
            count : this.state.count + 1
        }, ()=>{

            console.log(this.state.count)
        })
        // this.state can be only used in constructor, if u use in normal methods it doesnot update in ui,
        // so update in ui we have to use setState method

        // this.state.count = this.state.count + 1
      }
  render() {
    return (
        <div>
      <div>
       count: {this.state.count}
      </div>
      <button onClick={()=>{this.increment()}}>INCREMENT</button>
      </div>
    )
  }
}

export default Counter
