import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "hello"
      }
      this.ClickHandler = this.ClickHandler.bind(this)
    }
    ClickHandler(){
        this.setState({
            message: "Bye"
        })
        console.log(this)
    }
    

  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        
        

        {/* When we try to display on click it gives error */}
        {/* Cannot read properties of undefined (reading 'setState') */}
        {/* so to solve this we have various Approch */}

        {/* Approch 1 */}
        {/* add this.clickHandler.bind(this) */}

        {/* <button onClick={this.ClickHandler.bind(this)}>Click</button> */}

        {/* Approch 2 */}
        {/* to add ()=>{} arrow fucntion to on click i.e ()=>{this.ClickHandler} */}

        {/* <button onClick={()=>{this.ClickHandler}}>Click</button> */}

        {/* Approch 3
        which best performance from above two approch i.e binding in the constructor  */}
        
        <button onClick={this.ClickHandler}>Click</button>

       </div>
    )
  }
}

export default EventBind
