import React, { Component } from 'react'

class ConditionalRendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin: true
      }
    }
    
  render() {


    //short Cirtuit Operator
    //first left one is validated if that is true then it go for right side 
    return this.state.isLoggedin && <div>welcome Mukesh</div>  

    //Ternary Conditional Operator

    // return(
    //     this.state.isLoggedin ? <div>welcome Mukesh</div> : <div>welcome Guest</div>
    // )

    //Element Variable approch
    // let Message
    // if(this.state.isLoggedin){
    //     Message = <div>welcome Mukesh</div>
    // }
    // else{
    //     Message = <div>welcome Guest</div>
    // }




//     if/else
//     if(this.state.isLoggedin){
//         return <div>welcome Mukesh</div>
        
//     }
//     else{
//         return<div>welcome guest</div>
//     }
  }
}

export default ConditionalRendering
